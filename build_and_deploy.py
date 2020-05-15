# Automating build and deploy of site.
# Because the site is deployed on github pages, its in another repository, 
# so I want to have a way to copy files from the build folder of my dev repo
# to the deployed repo.

# I could have a git repository inited directly in build folder but I believe its best to make a difference
# between production repo and development repo

import os
import subprocess
import glob
import shutil
import json

_dev_dir="portfolio-react"
_prod_dir="lethenju.github.io"
_path = os.getcwd().replace(_dev_dir,"")


print(" === AUTOMATED BUILD SCRIPT === ")

os.chdir(_path+_dev_dir)

# Grab version number
with open("package.json", "r") as read_file:
    data = json.load(read_file)
version = data['version']

print("Version number : "+ version)

print("== Building Website ==")

os.system("npm run build")

print("== Remove old files ==")

# Remove files first
files = glob.glob(_path+_prod_dir+'/*', recursive=True)

for f in files:
    try:
        if os.path.isfile(f):
            os.remove(f)
        else:
            shutil.rmtree(f)
    except OSError as e:
        print("Error: %s : %s" % (f, e.strerror))


def recursive_copy(src, dest):
    """
    Copy each file from src dir to dest dir, including sub-directories.
    """
    for item in os.listdir(src):
        file_path = os.path.join(src, item)

        # if item is a file, copy it
        if os.path.isfile(file_path):
            shutil.copy(file_path, dest)

        # else if item is a folder, recurse 
        elif os.path.isdir(file_path):
            new_dest = os.path.join(dest, item)
            os.mkdir(new_dest)
            recursive_copy(file_path, new_dest)


print("== Copy new files ==")

recursive_copy(_path+_dev_dir+"/build", _path+_prod_dir)


print("== Deploy ==")

os.chdir(_path+_prod_dir)

message = 'DEPLOY - Version '+version
os.system("git add *")
os.system("git commit -m \""+message+"\"")
os.system("git push")

print("== Done ==")
