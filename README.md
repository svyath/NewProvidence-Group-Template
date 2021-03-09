# NewProvidence-Group-Template
  
  How to take latest changes from dev branch to my current branch?
    
    1 Commit all changes to branch your_branch (git status shows clean)
    2 git checkout dev
    3 git pull 
    4 git checkout your_branch
    5 git merge dev - this merges changes from local dev to the your_branch.
