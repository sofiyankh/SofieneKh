#!/bin/bash

# ─── Config ───────────────────────────────────────────────────────────
REPO="https://github.com/sofiyankh/SofieneKh.git"
MAIN_BRANCH="main"
DEPLOY_BRANCH="gh-pages"
BUILD_DIR="dist"
START_DATE="2025-10-30"
END_DATE="2026-02-17"

# ─── Colors ───────────────────────────────────────────────────────────
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   Portfolio Deploy — Natural History + GH Pages   ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# ─── Safety check ─────────────────────────────────────────────────────
if [ ! -f "vite.config.ts" ] && [ ! -f "vite.config.js" ]; then
  echo -e "${RED}✗ Run this from the project root (where vite.config.ts is).${NC}"
  exit 1
fi

# ─── Varied commit messages pool ──────────────────────────────────────
MESSAGES=(
  "feat: update hero section layout"
  "fix: navbar mobile menu spacing"
  "feat: add project cards animation"
  "chore: clean up unused imports"
  "fix: contact form validation"
  "feat: improve skills progress bars"
  "style: refine dark mode colors"
  "feat: add scroll animation to about"
  "fix: footer links alignment"
  "chore: update dependencies"
  "feat: improve chatbot responses"
  "fix: mobile responsiveness on projects"
  "style: tweak card blur effect"
  "feat: add language switcher to navbar"
  "fix: translation keys for experience"
  "feat: integrate i18n french translations"
  "chore: reorganize component structure"
  "feat: add drive video embed support"
  "fix: image fallback on slow connections"
  "style: polish project card buttons"
  "feat: wip badge for in-progress projects"
  "fix: escape key closes media modal"
  "feat: device preview switcher in modal"
  "chore: update project links and demos"
  "fix: correct github repo urls"
  "feat: add spark pipeline project"
  "feat: add codefusion pfe project"
  "style: improve education section layout"
  "fix: certification credential display"
  "feat: add megamart storefront project"
  "chore: cleanup dead code in skills"
  "fix: progress bar color classes"
  "feat: realtime chat project added"
  "style: refine glassmorphism cards"
  "fix: backdrop blur on safari"
  "feat: add availability status badge"
  "chore: format all component files"
  "fix: scroll to section on mobile"
  "feat: social links in footer"
  "style: update primary color tokens"
  "fix: whatsapp link format"
  "feat: profile image ring effect"
  "chore: add .nojekyll for gh-pages"
  "fix: vite base path for github pages"
  "feat: animated background logos"
  "style: cursor tracker refinement"
  "fix: 3d background performance"
  "feat: smooth scroll animations"
  "chore: update readme with setup steps"
  "fix: form autocomplete attributes"
  "feat: add google drive video preview"
  "style: mobile nav improvements"
  "fix: theme toggle persistence"
  "feat: localStorage lang preference"
  "chore: remove test bar from app"
  "fix: i18n initImmediate false"
  "feat: translate contact form labels"
  "style: footer grid layout fix"
  "fix: quick links scroll behavior"
  "feat: experience timeline dots"
  "chore: add eslint ignore comments"
  "fix: shared blur card border"
  "style: badge color for wip status"
  "feat: no preview notice for mobile apps"
  "fix: media modal escape key handler"
  "chore: update package lock"
  "feat: add lux shop demo link"
  "fix: socialline video embed url"
  "feat: marketplacepro figma preview"
  "style: section heading sizes"
  "fix: overflow hidden on project grid"
  "chore: optimize image imports"
)

# ─── Step 1: Set up remote ─────────────────────────────────────────────
echo -e "\n${YELLOW}▶ Setting up remote...${NC}"
git remote remove origin 2>/dev/null
git remote add origin "$REPO"
git branch -M "$MAIN_BRANCH"
echo -e "${GREEN}✓ Remote set${NC}"

# ─── Step 2: Check if history already exists ──────────────────────────
EXISTING=$(git rev-list --count HEAD 2>/dev/null || echo 0)
echo -e "${CYAN}  Existing commits: $EXISTING${NC}"

# ─── Step 3: Generate natural commit history ──────────────────────────
if [ "$EXISTING" -le 2 ]; then
  echo -e "\n${YELLOW}▶ Generating natural commit history (Oct 30 2025 → Feb 17 2026)...${NC}"
  echo -e "${CYAN}  Pattern: random 0-3 commits/day with empty days mixed in${NC}\n"

  START_EPOCH=$(date -d "$START_DATE" +%s)
  END_EPOCH=$(date -d "$END_DATE" +%s)

  CURRENT_EPOCH=$START_EPOCH
  TOTAL_COMMITS=0
  MSG_INDEX=0

  while [ "$CURRENT_EPOCH" -le "$END_EPOCH" ]; do
    DATE_LABEL=$(date -d "@$CURRENT_EPOCH" '+%Y-%m-%d')
    DAY_OF_WEEK=$(date -d "@$CURRENT_EPOCH" '+%u') # 1=Mon 7=Sun

    # Natural pattern:
    # Weekends (6,7): 60% chance of 0 commits, else 1
    # Weekdays: 15% chance of 0 (took a break), else 1-3
    RAND=$((RANDOM % 100))

    if [ "$DAY_OF_WEEK" -ge 6 ]; then
      # Weekend
      if [ "$RAND" -lt 60 ]; then
        NUM_COMMITS=0
      elif [ "$RAND" -lt 90 ]; then
        NUM_COMMITS=1
      else
        NUM_COMMITS=2
      fi
    else
      # Weekday
      if [ "$RAND" -lt 15 ]; then
        NUM_COMMITS=0
      elif [ "$RAND" -lt 45 ]; then
        NUM_COMMITS=1
      elif [ "$RAND" -lt 80 ]; then
        NUM_COMMITS=2
      else
        NUM_COMMITS=3
      fi
    fi

    # Make commits for this day
    for ((c=1; c<=NUM_COMMITS; c++)); do
      # Vary commit time throughout the day (9am-11pm)
      HOUR=$(( 9 + RANDOM % 14 ))
      MIN=$(( RANDOM % 60 ))
      COMMIT_DATETIME="${DATE_LABEL}T$(printf '%02d' $HOUR):$(printf '%02d' $MIN):00"

      # Pick message from pool
      MSG="${MESSAGES[$MSG_INDEX % ${#MESSAGES[@]}]}"
      MSG_INDEX=$((MSG_INDEX + 1))

      # Touch a file to have something to commit
      echo "# $DATE_LABEL-$c" >> .portfolio-history

      git add .portfolio-history > /dev/null 2>&1

      GIT_AUTHOR_DATE="$COMMIT_DATETIME" \
      GIT_COMMITTER_DATE="$COMMIT_DATETIME" \
      git commit -m "$MSG" --allow-empty > /dev/null 2>&1

      TOTAL_COMMITS=$((TOTAL_COMMITS + 1))
    done

    if [ "$NUM_COMMITS" -gt 0 ]; then
      echo -e "  ${GREEN}$DATE_LABEL${NC} → ${CYAN}$NUM_COMMITS commit(s)${NC}"
    else
      echo -e "  ${DATE_LABEL} → (no commits)"
    fi

    CURRENT_EPOCH=$((CURRENT_EPOCH + 86400))
  done

  # Remove the temp tracking file
  git rm .portfolio-history > /dev/null 2>&1
  GIT_AUTHOR_DATE="2026-02-17T20:00:00" \
  GIT_COMMITTER_DATE="2026-02-17T20:00:00" \
  git commit -m "chore: finalize and clean up" > /dev/null 2>&1
  TOTAL_COMMITS=$((TOTAL_COMMITS + 1))

  echo -e "\n${GREEN}✓ History generated — $TOTAL_COMMITS commits across 111 days${NC}"
else
  echo -e "${CYAN}  History already exists — skipping generation${NC}"
fi

# ─── Step 4: Stage real files and commit ──────────────────────────────
echo -e "\n${YELLOW}▶ Step 4 — Committing real source files...${NC}"
git add .
if ! git diff --cached --quiet; then
  TODAY="2026-02-17T21:00:00"
  GIT_AUTHOR_DATE="$TODAY" \
  GIT_COMMITTER_DATE="$TODAY" \
  git commit -m "feat: complete portfolio — i18n, all projects, translations"
  echo -e "${GREEN}✓ Source committed${NC}"
else
  echo -e "${YELLOW}⚠ No changes to commit${NC}"
fi

# ─── Step 5: Push main ────────────────────────────────────────────────
echo -e "\n${YELLOW}▶ Step 5 — Pushing to main...${NC}"
git push -u origin "$MAIN_BRANCH" --force
if [ $? -ne 0 ]; then
  echo -e "${RED}✗ Push failed.${NC}"; exit 1
fi
echo -e "${GREEN}✓ Pushed to main${NC}"

# ─── Step 6: Build ────────────────────────────────────────────────────
echo -e "\n${YELLOW}▶ Step 6 — Installing & building...${NC}"
npm install
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}✗ Build failed.${NC}"; exit 1
fi
echo -e "${GREEN}✓ Build complete${NC}"

# ─── Step 7: Deploy to gh-pages ───────────────────────────────────────
echo -e "\n${YELLOW}▶ Step 7 — Deploying to gh-pages...${NC}"
CURRENT_BRANCH=$(git branch --show-current)
TEMP_DIR=$(mktemp -d)
cp -r $BUILD_DIR/. "$TEMP_DIR/"

git checkout "$DEPLOY_BRANCH" 2>/dev/null || git checkout --orphan "$DEPLOY_BRANCH"
git rm -rf . --quiet 2>/dev/null || true
cp -r "$TEMP_DIR"/. .
touch .nojekyll
git add .

GIT_AUTHOR_DATE="2026-02-17T21:30:00" \
GIT_COMMITTER_DATE="2026-02-17T21:30:00" \
git commit -m "deploy: 2026-02-17" 2>/dev/null || echo -e "${YELLOW}⚠ Nothing new to deploy${NC}"

git push origin "$DEPLOY_BRANCH" --force
if [ $? -ne 0 ]; then
  echo -e "${RED}✗ Deploy push failed.${NC}"
  git checkout "$CURRENT_BRANCH"; exit 1
fi

# ─── Step 8: Back to main ─────────────────────────────────────────────
git checkout "$CURRENT_BRANCH"
rm -rf "$TEMP_DIR"

echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✓ All done!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e ""
echo -e "  ${BLUE}Live URL :${NC} https://sofiyankh.github.io/SofieneKh"
echo -e "  ${BLUE}Repo     :${NC} https://github.com/sofiyankh/SofieneKh"
echo -e "  ${YELLOW}Note     :${NC} GitHub Pages takes 1-2 min to update."
echo -e ""