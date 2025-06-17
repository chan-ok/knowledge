---
createdAt: 2025-06-17
updatedAt: 2025-06-17
tags:
  - cli
  - npm
---
```shell
# 1. Clean install from lock file
npm ci

# 2. Check for outdated packages
npm outdated

# 3. Audit for security issues
npm audit

# 4. If adding new dependency, research first
npm info new-package

# 5. Install and update lock file
npm install new-package

# 6. Commit the updated lock file
git add package-lock.json
git commit -m "Add new-package dependency"
```