# Pushing updates to GitHub

Notes on how this folder is connected to GitHub, and how to send changes up.

- **Local folder:** `C:\Users\rk102472\Documents\GitHub\kcmallow-vets`
- **GitHub repo:** https://github.com/raykingston/kingstoncrowleyveterinary
- **GitHub account:** `raykingston` (personal, raykingston@hotmail.com), not the work account

## Everyday routine

### Option 1 – VS Code (no typing)

1. Open the **Source Control** panel (branch icon on the left, or `Ctrl+Shift+G`).
2. Click **+** next to the changed files (or next to "Changes" to add them all).
3. Type a short message describing the change.
4. Click **Commit**.
5. Click **Sync Changes** to send it to GitHub.

### Option 2 – Terminal

```
git add -A
git commit -m "Describe what you changed"
git push
```

### If you edited files on the GitHub website

Run this **before** starting work locally, so both copies stay in sync:

```
git pull
```

## How it was set up (one-off, already done)

These only need repeating if the folder is ever re-created from scratch.

1. **Linked the folder to GitHub:**
   ```
   git remote add origin https://github.com/raykingston/kingstoncrowleyveterinary.git
   git fetch origin
   ```
2. **Placed local work on top of the files already uploaded via the website**, so nothing on GitHub was overwritten:
   ```
   git reset --soft origin/main
   git branch -u origin/main
   git commit -m "..."
   ```
3. **Used the personal email for commits in this project only** (work repos keep the work email):
   ```
   git config user.email "raykingston@hotmail.com"
   ```
4. **Kept the personal and work GitHub logins separate.** Putting the username in the repo address makes Windows store a separate login for it:
   ```
   git remote set-url origin https://raykingston@github.com/raykingston/kingstoncrowleyveterinary.git
   ```
   The first `git push` opened a browser to sign in. Sign in as **raykingston** (sign out of the work account in that browser first if needed). After that it's remembered.

## Checking the setup

```
git remote -v              # should show https://raykingston@github.com/...
git config user.email      # should show raykingston@hotmail.com
git status                 # "ahead 1" = commits not yet pushed
```

## Troubleshooting

- **"Permission denied" / 403 on push:** the wrong account is being used. Check that `git remote -v` includes `raykingston@`. If it does, open **Credential Manager** → **Windows Credentials** and remove only the entry for `git:https://raykingston@github.com` (leave the work one alone), then push again and sign in.
- **Push rejected ("fetch first" / "non-fast-forward"):** GitHub has changes you don't have locally (for example, edits made on the website). Run `git pull`, then `git push`.
- **Website not updating:** pushing to `main` triggers the GitHub Pages deploy. Check the **Actions** tab on GitHub for the run's status. Only `index.html` and the `site/` folder are published. `Requirements/` and these notes are not.
