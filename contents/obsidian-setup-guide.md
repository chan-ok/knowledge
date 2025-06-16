# Obsidian Git 설정 가이드

## 1️⃣ Obsidian에서 Vault 열기

### 방법 1: 폴더로 열기

1. Obsidian 실행
2. "Open folder as vault" 클릭
3. 이 `contents` 폴더 선택
4. "Open" 클릭

### 방법 2: 새 Vault 생성 시

1. Obsidian에서 "Create new vault" 선택
2. Vault name을 지정하고 이 폴더 경로를 선택

## 2️⃣ Obsidian Git 플러그인 설치

1. **Settings** (⚙️) 열기
2. **Community plugins** 섹션으로 이동
3. **Turn on community plugins** 활성화
4. **Browse** 버튼 클릭
5. "**Obsidian Git**" 검색 (by Vinzent)
6. **Install** → **Enable** 클릭

## 3️⃣ GitHub 연동 설정

### GitHub Repository 생성

1. GitHub에서 새 **Private Repository** 생성
2. Repository name: `obsidian-vault` (또는 원하는 이름)
3. ✅ "Add a README file" 체크 해제
4. **Create repository** 클릭

### Personal Access Token 생성

1. GitHub → **Settings** → **Developer settings**
2. **Personal access tokens** → **Fine-grained tokens**
3. **Generate new token** 클릭
4. 권한 설정:
   - **Repository access**: 생성한 repository 선택
   - **Permissions**:
     - Metadata: **Read** access
     - Contents: **Read and Write** access
     - Pull requests: **Read and Write** access
5. **Generate token** 클릭하고 **토큰 복사해두기**

### Git Remote 추가

1. Terminal에서 contents 폴더로 이동:

   ```bash
   cd /Users/chanhokim/myFiles/Project/blog/contents
   ```

2. GitHub repository를 remote로 추가:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git branch -M main
   git push -u origin main
   ```

## 4️⃣ Obsidian Git 플러그인 설정

1. **Settings** → **Community plugins** → **Obsidian Git**
2. **Authentication/Commit author** 섹션:

   - **Author name**: GitHub 사용자명
   - **Author email**: GitHub 이메일
   - **Password/Personal access token**: 생성한 토큰 입력

3. **General Settings**:

   - ✅ **Pull updates on startup**
   - ✅ **Push on backup**
   - **Vault backup interval**: `10` (분)
   - **Commit message**: `vault backup: {{date}}`

4. **Advanced** (선택사항):
   - ✅ **Pull before push**
   - ✅ **Show status bar**

## 5️⃣ 사용법

### 자동 동기화

- 10분마다 자동으로 변경사항이 commit & push됩니다
- Obsidian 실행 시 자동으로 pull됩니다

### 수동 동기화

- **Ctrl/Cmd + P** → Command palette 열기
- 다음 명령어들을 사용할 수 있습니다:
  - `Obsidian Git: Pull`
  - `Obsidian Git: Create backup`
  - `Obsidian Git: Commit all changes`
  - `Obsidian Git: Push`

### Status Bar

- 화면 하단에 Git 상태가 표시됩니다
- 클릭하면 빠른 Git 작업을 수행할 수 있습니다

## 6️⃣ 다중 기기 동기화

### 다른 기기에서 설정

1. Git clone:
   ```bash
   git clone https://YOUR_TOKEN@github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   ```
2. Obsidian에서 해당 폴더를 vault로 열기
3. 동일한 플러그인 설정 적용

### 모바일 기기 (iOS/Android)

- **iOS**: a-Shell Mini 앱 사용
- **Android**: Termux 앱 사용
- 자세한 모바일 설정은 별도 가이드 참조

## 🚨 주의사항

1. **개인 정보**: Private repository 사용 권장
2. **토큰 보안**: Personal access token은 안전하게 보관
3. **충돌 해결**: 여러 기기에서 동시 편집 시 merge conflict 발생 가능
4. **대용량 파일**: 이미지나 동영상은 Git LFS 고려

## 🔧 문제 해결

### 인증 오류

```bash
git config --global credential.helper cache
```

### Push 실패

```bash
git pull --rebase origin main
git push origin main
```

### 플러그인 오류

1. Obsidian 재시작
2. 플러그인 비활성화 후 재활성화
3. Git 상태 확인: `git status`

---

_이 가이드를 따라하시면 안전하고 효율적인 Obsidian 동기화 환경을 구축할 수 있습니다!_
