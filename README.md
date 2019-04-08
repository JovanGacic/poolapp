# React native
#Install & configure new app
#AMD Windows?
    npm install -g react-native-cli
    react-native init NewProject
    cd NewProject
    react-native run-android
   
#Which db?
#Initialize the repository
git init
#Define a username and email to be shown in commits
git config --global user.name 'Jovan'
git config --global user.email 'jovangacic@gmail.com'
#Add all files in the current directory to the staging phase
git add .
#Commit the changes
git commit -m 'Type comment here'
#Create a .gitignore file (can't create on Windows because of the starting dot, so go with TOUCH cmd)
touch .gitignore
#Create a branch to start working on a new feature
git branch BranchName
#After creating a new branch, change the workspace to it
git checkout BranchName
#When finished with the branch work, we can  merge with the master branch
git merge BranchName
#Add a remote repository
git remote add origin https://....
#Push to that origin master
git push -u origin master 
