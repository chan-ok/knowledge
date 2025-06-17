```bash
# 설치
choco install oh-my-posh

# 아이콘 지원을 위해 폰트 설치
oh-my-posh font install meslo
```

### 테마 및 기타 설정

```bash
# Oh My Posh
&([ScriptBlock]::Create((oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\\multiverse-neon.omp.json" --print) -join "`n"))

# Alias Setting
function 함수명{명령어}
```

### 자동완성 설정

```bash
Install-Module PSReadLine -RequiredVersion 2.1.0
```

### **PowerShell 프로필 설정**

```bash
if (!(Test-Path -Path $PROFILE.CurrentUserAllHosts)) {
    New-Item -ItemType File -Path $PROFILE.CurrentUserAllHosts -Force
}
code $PROFILE.CurrentUserAllHosts  # VS Code 사용시
```

### **자동 완성 설정 추가**

```bash
# PSReadLine 모듈 임포트
Import-Module PSReadLine

# 히스토리 기반 예측 활성화
Set-PSReadLineOption -PredictionSource History

# 커서 이동 설정
Set-PSReadLineOption -HistorySearchCursorMovesToEnd

# 방향키 기반 히스토리 검색
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

# Tab 키로 메뉴 완성
Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete

# 인라인 제안 색상 설정
Set-PSReadLineOption -Colors @{ InlinePrediction = '#875f5f'}

# 단어 단위 이동
Set-PSReadLineKeyHandler -Chord "Ctrl+RightArrow" -Function ForwardWord
```