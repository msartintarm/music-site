# music-site

Welcome.

To build:

# 1. Env Setup - make sure you have:
- NPM 3 installed: `npm install npm@latest` should succeed 
- GOW tools installed if Windows. `make -v` should succeed (3.81 for me)
- Git Bash installed / updated. `git -v` should succeed (1.9.5.mysisgit for me)
- A couple other dependencies: `npm install react react-dom webpack webpack-dev-server`

# 2. Install:
- `git clone https://msartintarm@github.com/msartintarm/music-site my-chosen-directory`
- `make install`

#3. Build (this part doesn't work yet):
- `make lib`

# 4. Get cracking
- [Task List](./TASKLIST.md)
- Try to keep data defined at the top of the file, seperately from code.

# 5. Commit changes
- `git status`
- `git add src/`
- `git commit -m 'did the awesome stuff'
- `git fetch && git rebase origin/master`
- `git push origin HEAD`
