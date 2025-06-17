---
tags:
  - npm
  - bug
---
### 버그 내용
```shell
npm : このシステムではスクリプトの実行が無効になっているため、ファイル C:\Program Files\nodejs\npm.ps1 を読み込むことが
できません。詳細については、「about_Execution_Policies」(https://go.microsoft.com/fwlink/?LinkID=135170) を参照してくだ
さい。
発生場所 行:1 文字:1
+ npm -v
+ ~~~
    + CategoryInfo          : セキュリティ エラー: (: ) []、PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

### 원인
- 실행권한이 `Restricted`로 되어있음

### 해결방법
```shell
# 確認方法
Get-ExecutionPolicy
# 結果> Restricted

# 変更方法
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

# 変更後
Get-ExecutionPolicy
# 結果> RemoteSigned

# Global Setting
Set-ExecutionPolicy RemoteSigned -Scope LocalMachine
```

### 참고
- [https://qiita.com/ponsuke0531/items/4629626a3e84bcd9398f](https://qiita.com/ponsuke0531/items/4629626a3e84bcd9398f)