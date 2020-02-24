githubにプロジェクトを登録する : 
```
generator-study-yeoman
md generator-study-yeoman
cd generator-study-yeoman
git init
```
generatorを作る
```
? Your generator name generator-lig-sample : generator-study-yoeman
? Description	study yoeman
? Project homepage url :
? Author’s Name : Tadashi Goto
? Author’s Email : tadashi.goto2564@gmail.com
? Author’s Homepage :
? Package keywords (comma to split) :
? Send coverage reports to coveralls Yes :
? GitHub username or organization : tadashigoto
? Your website (optional): 
? Which license do you want to use? Apache 2.0 :
```
generator-study-yeomanフォルダで
```
npm link
```
(不要になったら　npm unlink -g generator-study-yeoman)

新しく作られるプロジェクトを置くフォルダに移動する。
```
cd ..\test
yo study-yeoman
```
質問は全てエンターキー

testフォルダにdymmyfile.txtが作成されている。

次に generator-study-yeoman\generators\app\templates\dummyfile.txtを編集する

testフォルダに移動
```
yo study-yeoman
```
質問は全てエンターキー

