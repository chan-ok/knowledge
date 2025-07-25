### 📋 구성 요소

- **타입 (Type)**: 커밋의 목적을 나타내는 필수 항목
- **범위 (Scope)**: 변경 사항이 영향을 미치는 영역 (선택적)
- **설명 (Description)**: 변경 사항에 대한 간결한 설명 (필수)
- **본문 (Body)**: 상세한 설명 (선택적)
- **푸터 (Footer)**: 이슈 참조나 Breaking Change 표시 (선택적)

## 🔤 커밋 타입

### 📦 주요 타입

| 타입       | 설명                                   | SemVer 영향 | 예시                                    |
| ---------- | -------------------------------------- | ----------- | --------------------------------------- |
| `feat`     | 새로운 기능 추가                       | MINOR       | `feat(auth): 소셜 로그인 기능 추가`     |
| `fix`      | 버그 수정                              | PATCH       | `fix(api): 토큰 만료 처리 오류 수정`    |
| `docs`     | 문서 변경                              | -           | `docs: README에 설치 가이드 추가`       |
| `style`    | 코드 스타일 변경 (포맷팅, 세미콜론 등) | -           | `style: ESLint 규칙에 따른 코드 포맷팅` |
| `refactor` | 기능 변경 없는 코드 리팩토링           | -           | `refactor: 사용자 검증 로직 단순화`     |
| `perf`     | 성능 개선                              | PATCH       | `perf: 데이터베이스 쿼리 최적화`        |
| `test`     | 테스트 코드 추가/수정                  | -           | `test: 로그인 서비스 단위 테스트 추가`  |
| `build`    | 빌드 시스템이나 외부 의존성 변경       | -           | `build: webpack 설정 업데이트`          |
| `ci`       | CI/CD 설정 변경                        | -           | `ci: GitHub Actions 워크플로우 수정`    |
| `chore`    | 기타 유지보수 작업                     | -           | `chore: 의존성 패키지 업데이트`         |
| `revert`   | 이전 커밋 되돌리기                     | -           | `revert: "feat: 소셜 로그인 기능 추가"` |

### 🚨 Breaking Changes

API나 기능의 호환성을 깨뜨리는 변경사항은 다음과 같이 표시합니다:

```bash
# 방법 1: 타입 뒤에 ! 추가
feat(api)!: 사용자 API 응답 형식 변경

# 방법 2: 푸터에 BREAKING CHANGE 명시
feat(api): 사용자 API 응답 형식 변경

BREAKING CHANGE: 기존 'user' 필드가 'userInfo'로 변경됨
```

## 📐 작성 규칙

### ✅ 기본 원칙

1. **명령문 형태 사용**: "추가하다", "수정하다" (현재 시제)
2. **첫 글자 소문자**: 타입 뒤 설명은 소문자로 시작
3. **마침표 제외**: 설명 끝에 마침표(.) 사용 안 함
4. **50자 이하**: 제목 라인은 50자 이내로 작성
5. **한 줄에 하나**: 각 커밋은 하나의 논리적 변경사항만 포함

### 📏 상세 규칙

#### 타입 (Type)

- 영어 소문자 사용
- 콜론(:) 뒤에 공백 하나

#### 범위 (Scope)

- 괄호 안에 작성: `feat(auth):`
- 프로젝트 모듈/컴포넌트명 사용
- 너무 세분화하지 않기

#### 설명 (Description)

- 한국어 사용 가능
- 변경사항을 명확히 표현
- "~을 위해", "~때문에" 등 이유보다는 **무엇을** 변경했는지 중점

## 💡 예시

### 🔥 좋은 예시

```bash
# 새 기능
feat(auth): 구글 OAuth 로그인 기능 추가

# 버그 수정
fix(cart): 빈 장바구니에서 주문 버튼 비활성화 오류 수정

# 범위가 있는 리팩토링
refactor(utils): 날짜 포맷팅 함수 성능 개선

# Breaking Change
feat(api)!: REST API v2로 업그레이드

BREAKING CHANGE:
- 모든 API 엔드포인트가 `/api/v2/` 접두사 필요
- 응답 형식이 JSON-API 스펙으로 변경

# 상세한 본문이 있는 커밋
fix(payment): 결제 완료 후 리다이렉트 오류 해결

결제가 완료된 후 성공 페이지로 리다이렉트되지 않는 문제를 해결했습니다.
PG사 응답 처리 로직에서 상태 코드 확인 부분을 수정했습니다.

Fixes #123
```

### ❌ 나쁜 예시

```bash
# 너무 모호함
fix: 버그 수정

# 마침표 사용
feat: 로그인 기능 추가.

# 과거형 사용
fix: 버그를 수정했음

# 여러 변경사항을 한 번에
feat: 로그인 기능 추가 및 회원가입 페이지 수정

# 너무 긴 제목
feat(authentication): 사용자가 구글, 페이스북, 카카오톡을 통해 소셜 로그인을 할 수 있는 기능을 추가하고 JWT 토큰 관리 시스템도 함께 구현
```

## 🛠 도구 및 자동화

### 📚 권장 도구

1. **Commitizen**: 대화형 커밋 메시지 작성

   ```bash
   npm install -g commitizen cz-conventional-changelog
   ```

2. **Husky + Commitlint**: 커밋 메시지 검증

   ```bash
   npm install --save-dev @commitlint/config-conventional @commitlint/cli husky
   ```

3. **Semantic Release**: 자동 버전 관리 및 릴리스
   ```bash
   npm install --save-dev semantic-release
   ```

### ⚙️ 설정 예시

#### `.commitlintrc.json`

```json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"]],
    "subject-case": [2, "always", "lower-case"],
    "subject-max-length": [2, "always", 50]
  }
}
```

## 📊 버전 관리 연동

### SemVer 매핑

- `feat`: **MINOR** 버전 증가 (1.1.0)
- `fix`: **PATCH** 버전 증가 (1.0.1)
- `BREAKING CHANGE`: **MAJOR** 버전 증가 (2.0.0)
- 기타 타입: 버전에 영향 없음

### 자동 체인지로그

커밋 타입별로 체인지로그가 자동 생성됩니다:

```markdown
## [1.2.0] - 2025-01-14

### ✨ Features

- **auth**: 구글 OAuth 로그인 기능 추가
- **cart**: 위시리스트 기능 추가

### 🐛 Bug Fixes

- **payment**: 결제 완료 후 리다이렉트 오류 해결
- **ui**: 모바일 반응형 레이아웃 수정

### 📚 Documentation

- README에 설치 가이드 추가
```

## 📋 체크리스트

커밋하기 전 다음을 확인하세요:

- [ ] 적절한 타입을 선택했는가?
- [ ] 설명이 명확하고 간결한가?
- [ ] 제목이 50자 이하인가?
- [ ] Breaking Change가 있다면 적절히 표시했는가?
- [ ] 관련 이슈가 있다면 푸터에 참조했는가?
- [ ] 하나의 논리적 변경사항만 포함하는가?

## 🎯 TDD 환경에서의 활용

본 프로젝트는 TDD 기반 개발을 지향하므로 다음과 같은 패턴을 권장합니다:

```bash
# 1. 테스트 작성
test(auth): 로그인 기능 테스트 케이스 추가

# 2. 기능 구현
feat(auth): 로그인 기능 구현

# 3. 리팩토링
refactor(auth): 로그인 로직 최적화
```

---

**📅 작성일**: 2025년 1월 14일  
**📌 기준 스펙**: Conventional Commits 1.0.0  
**🔄 최종 업데이트**: 2025년 1월 14일  
**✍️ 작성자**: TDD 기반 React 프론트엔드 개발팀
