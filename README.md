# Quick Start

## 개요

* 해당 튜토리얼은 웹컴포넌트는 건드리지 않고, ipynb파일만으로 치트시트를 개발하고자 하는 분들을 위한 안내서입니다.
* npm이나 node.js 같은 웹개발 환경은 전혀 필요없으며, python 환경만 구축되어 있으시다면 별다른 무리 없이 개발하실 수 있으실 겁니다.
* 일단 `Ubuntu 20.04.5 LTS (WSL2)` 및 `python 3.9`버전에서는 정상작동이 확인되었습니다.

## 디펜던시 설치하기

```bash
pip install fastapi==0.85.0
pip install uvicorn==0.18.3
```

* 파이썬 기반 개발 서버 구동에 필요하오니 위 두 라이브러리는 꼭 설치해주시기 바랍니다.

## 치트시트 수정하기

```bash
─ docs ─ assets ┬ foo.ipynb
                ├ bar.ipynb
                └ baz.ipynb
```

* 그리고 `docs/assets/*.ipynb` 파일들을 원하는 대로 수정해주시면 됩니다.
* 단, ipynb 파일들을 수정하는 데에는 엄격한 규칙이 있습니다.

## `ipynb` 파일 작성 규칙

* 먼저 반드시 마크다운셀과 코드셀은 서로 번갈아가면서 등장해야 합니다.

```markdown
### plot
https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.plot.html#matplotlib-axes-axes-plot

`plot` 메서드를 통해 라인플롯을 그릴 수  있습니다.
```

* 마크다운셀의 경우, **첫째줄**에는 "반드시" **제목**을, 바로 다음 줄에 "반드시" 관련 **링크**(e.g. 공식문서)를 첨부해야 합니다.
* 그리고 한 줄 뛰운 다음 설명을 작성합니다.
* 마크다운셀 작성을 완다료했면 코드셀을 작성할 차례입니다.

```python
import matplotlib.pyplot as plt
import numpy as np
fig, ax = plt.subplots()
x = np.linspace(-10, 10, 1000)
y = lambda x: np.sin(x)
ax.plot(x, y(x))
ax.grid()
plt.show()
```

* 위와 같이 코드셀을 작성했을 경우 다음과 같이 빌드됩니다.

![code-cell](README/code-cell.png)

* 보시다시피 코드의 실행결과인 표까지도 함께 치트시트에 빌드되는 것을 알 수 있습니다.

![img](README/result.png)

## 개발 서버 실행하기

* 치트시트 작성이 완료되었다면 개발서버를 열어 치트시트가 잘 빌드되는지 확인해야 합니다.

```bash
uvicorn main:app --reload
```

* 터미널에서 위의 커맨드를 실행합니다.
* 개발서버가 열리면, <http://localhost:8000> 포트로 접속하여 빌드된 결과물을 체크합니다.

> 주의사항!
>
> * 가짜연구소 레포지토리가 아닌 개인 레포지토리의 깃허브페이지로 치트시트를 빌드하고 싶다면, 별도의 추가적인 설정이 필요합니다.
> * 아쉽지만 이를 위해서는 `npm`과 `node.js` 등의 환경을 갖추셔야 합니다.
