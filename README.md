<p align="center">
  <img width="300" height="100" src="https://github.com/dennis0324/temptemp/assets/50710829/e2e0023c-18d0-447f-9b4d-7132bc3effda">
</p>
<h3 align="center">가치있게</h3>
<p align="center">
  AI를 통한 사람 위치 기반 비콘리스 전기 관리 시스템
</p>

---

**중요! 현재 개발중이므로 IOT와 관련된 모든 것들은 불가합니다**

하지만 데이터베이스, 데이터베이스 연동은 되어있으므로 자유롭게 확인 가능합니다.

# 전반적 디자인
## docker compose 구동 모습
<details>
  <summary>눌러서 확인</summary>
  
![image](https://github.com/dennis0324/temptemp/assets/50710829/2531b17e-43e1-4a70-9e67-5f308c7b6538)
  
![image](https://github.com/dennis0324/temptemp/assets/50710829/a99143d8-f1cd-42ed-981e-6caff4db8fc4)  
</details>

## 프론트 엔드
### 화면 디자인
화면 처음 디자인 했을 때의 모습(ADOBE XD로 디자인만 했던 그림)
![image](https://github.com/dennis0324/temptemp/assets/50710829/bb679890-c229-456d-88ad-ebc973127c3b)

### 데모 웹 디자인
실제로 구동이 가능한 디자인 
![image](https://github.com/dennis0324/temptemp/assets/50710829/b9091830-b815-4560-9eb2-4ac5dd71df32)


## 백엔드
본래는 CCTV와 연결되어 데이터를 받아야하지만 IOT의 개발이 되지 않은 점, 프론트 엔드 제작한 시간이 3학년 2학기 중간고사 끝난 이후 시점이므로 해당 9000포트의 graphql의 playground를 사용하여 임시 데이터를 제작하였음 말씀드립니다.

또한, 해당 서버는 `docker compose`를 한 후에도 사용이 가능하니 직접 넣어 테스트 해보는 것이 가능합니다.

해당 프로젝트의 제작 기간이 한달 남짓이므로 데모 버전에서의 백엔드 연동은 장비 목록만 가능합니다.

![image](https://github.com/dennis0324/temptemp/assets/50710829/66afd289-7dca-40d2-9df1-71b50ff88321)
graphql playground를 킨 모습

![image](https://github.com/dennis0324/temptemp/assets/50710829/926a1779-7e84-4a42-9870-33694a903357)
graphql playround에서 뮤테이션을 한 모습

# 클라우드
클라우드 서비스 위에서 제작이 우선시 되는 과제였기에 해당 서비스를 올려보려 하였으나, t2.micro에서의 이미지 배포가 메모리 용량으로 인해 불가능하여 따로 분리한 점 양해 부탁드립니다.

해당 서비스는 AWS fargate를 사용하고 있습니다.
해당 fargate의 관리는 cluster에서 관리하고 있으며
![image](https://github.com/dennis0324/temptemp/assets/50710829/c95ba7e1-f77b-438d-af88-824e43f8bbc6)
![image](https://github.com/dennis0324/temptemp/assets/50710829/1bf4c86c-f00c-4917-9125-652a0301990b)

사진에서 볼 수 있듯이 하나의 서비스가 작동하고 있지만 추가적으로 생성이 가능합니다.</br>
또한 AWS Lambda를 사용하여 자동으로 생성이 가능합니다.

![image](https://github.com/dennis0324/temptemp/assets/50710829/e9b0c69c-2078-4f7d-b0c1-d197a62c7606)

서비스를 자세히 보면 2개의 테스크가 돌아가는 것을 확인할 수 있고, 로드 밸런서가 접속하는 request를 분배하여 접속시켜 줍니다.

![image](https://github.com/dennis0324/temptemp/assets/50710829/1b919c66-648e-498c-bcbe-3dfd8f87e0bf)

![image](https://github.com/dennis0324/temptemp/assets/50710829/b7c60c82-73b9-4337-880f-5249f8d43af9)

마지막으로 해당 2개의 Task를 확인하면 2개 모두가 `node server.js`로 돌아가는 것을 확인 할 수 있습니다.

![image](https://github.com/dennis0324/temptemp/assets/50710829/ec2e2212-a58c-49de-994a-b252a8dea0ae)
이렇게 해당 관련 로드 밸런서로 들어가보게 되면 다음과 같이 데모 파일이 뜨는 것을 확인할 수 있습니다.

앞서 이야기했던 것 처럼 해당 깃허브에 올라가있는 docker image이 메모리 용량 한계치를 넘어서 이미지 배포가 불가능하여 별도로 데모 파일을 넣어서 돌렸습니다.
해당 데모 파일은 [데모](https://github.com/dennis0324/AWStemp)에서 확인하실 수 있으며, `./react/server.js`에서 볼 수 있듯이 포드가 3000번이고 

![image](https://github.com/dennis0324/temptemp/assets/50710829/2f4e975e-a78f-42bd-be64-44bce40cbaeb)

앞에서 보여드린 프론트 엔드의 URI를 확인해시면 포트가 3000임을 볼 수 있기 때문에 해당 서비스만 바로 올리면 배포가 가능한 형태를 띄고 있습니다.

# 2023/12/04 기준 추가글
주소를 공개하지 않고 해당 과제로만 제출하려던 이유가 접속량으로 인해서 가격 증가때문에 다른 외부인들의 접속을 막으려 하였으나,
해당 ECS의 경우 켜있는 시간으로 책정되어서도 돈이 나가는 것을 확인하였습니다.

![image](https://github.com/dennis0324/project-worthy/assets/50710829/55e04e93-c5bb-465a-8ced-d62adbaa971b)
해당 사진처럼 지속적으로 돈이 나가서 유지하기 힘들어져서 해당 AWS를 중지하고 해당 링크를 공개한채 되는 것을 증명하려 합니다.

![image](https://github.com/dennis0324/project-worthy/assets/50710829/95f31416-4854-4b8a-931d-e11ad8846f62)
해당 서비스는 다음과 같이 네트워크가 구성되어있습니다.
해당 서비스관련 DNS로 들어가보게 되면
![image](https://github.com/dennis0324/project-worthy/assets/50710829/27e584c1-bec9-4855-8861-8fca98adb45e)
위 사진처럼 react 데모 파일이 돌아가는 것을 확인 할 수 있습니다.



# 해당 깃허브 확인법

### 1. Prerequisites
- docker
- docker-desktop

### 2. install
```bash
# 실행
$ docker compse build && docker compose up -d
# 종료
$ docker compose down
```
