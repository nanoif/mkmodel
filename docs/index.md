<font class="generalcy">

### List

上面的例子假设数据集的基数为 1。当数据集很大时:

- 批量梯度下降 (BGD): 理想的梯度下降方式，对数据集中每个输入计算误差，将所有误差累加取平均作为最终的代价函数，并以此更新参数
全数据集计算代价函数，更好地代表总体，算出极小值后，保证梯度为 00
    - 对每个参数求偏导需要遍历数据集，计算过程很慢
    - 容易陷入局部极小值点
- 随机梯度下降 (stochastic, SGD): 每计算一个样本的前向传播后，就计算它的代价，并以之为目标函数更新参数
    - 速度快，随机性有利于跳出局部极小值点
    - 准确度下降，解空间搜索比较盲目，但大体上是最优方向
    - 若收敛，loss 呈现上下震荡、但总体上下降的趋势
- 小批量梯度下降 (Mini-BGD): SGD 和 BGD 的折中，把数据集随机分成若干 mini batch，每次迭代使用 batch size 个样本进行更新
    - 合理地增大 batch 可充分利用 GPU，提高内存利用率，减小 loss 的震荡，小 batch 引入随机性，尽管计算速度快，但同样可能造成收敛速度慢甚至不收敛
    - 合理地增大 batch 可充分利用 GPU，提高内存利用率，减小 loss 的震荡，小 batch 引入随机性，尽管计算速度快，但同样可能造成收敛速度慢甚至不收敛

- 速度快，随机性有利于跳出局部极小值点
- 准确度下降，解空间搜索比较盲目，但大体上是最优方向
- 若收敛，loss 呈现上下震荡、但总体上下降的趋势

### Math Formula

$$
L(\bm{w})
$$

E: $1 $ plus $1$ $=$ $2$

$\displaystyle L() $

$\displaystyle
L(\bm{w},b,\bm{\xi},\bm{\alpha},\bm{\mu})=\frac{1}{2}||\bm{w}||^2+C\sum_{i=1}^n \xi_i-\sum_{i=1}^n \alpha_i(y_i(\bm{w^\mathrm{T}}\bm{x_i}+b)-1+\xi_i)-\sum_{i=1}^n\mu_i\xi_i \\\\
\Leftrightarrow
$

$\displaystyle
\left(\begin{array}{c}
p_{1} \\\\
p_{2} \\\\
\vdots \\\\
p_{R}
\end{array}\right)\left(\begin{array}{cccc}
a_{1} & a_{2} & \cdots & a_{M}
\end{array}\right)=\left(\begin{array}{cccc}
p_{1} a_{1} & p_{1} a_{2} & \cdots & p_{1} a_{M} \\\\
p_{2} a_{1} & p_{2} a_{2} & \cdots & p_{2} a_{M} \\\\
\vdots & \vdots & \ddots & \vdots \\\\
p_{R} a_{1} & p_{R} a_{2} & \cdots & p_{R} a_{M}
\end{array}\right)
$

### Permalink

⭐🤯🥳🧐😈🤖👾❤️‍🔥💯💤🌺🌸💮🌼🍑🍄🌐🧭🌍⏳🌟🪐🌠🌌🎆🎇🏅🎼🎵🎶🛡⚠⏩🔆🏁🚩🔖✉📒📖📔📙📕📑🗂📈📌📎🔒🔑🗝🗡⚔🔫🔭📡🧬🩺💠🔘

### Fonts

- en:
    - cycn-eng:&emsp; <font face="cycn-eng">If winter comes , can spring be far behind ?</font>
    - monaco:&emsp; <font face="Monaco">If winter comes , can spring be far behind ?</font>
    - consolas:&emsp; <font face="Consolas">If winter comes , can spring be far behind ?</font>
    - m:&emsp; <mag>If winter comes , can spring be far behind ?</mag>
    - msf:&emsp; <font face="msf">If winter comes , can spring be far behind ?</font>



### Table: ToDo


| Method      | Description                          |
| :---------: | :---------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |


### Admonitions

!!! hint "hint"
    - 点对点链路 (point-to-point link) 由链路及其两端单一的发送方和接收方组成。很多链路层协议如 PPP、HDLC 基于此而设计。
    - 广播链路 (broadcast link) 能够让多个发送和接收节点接入到同一个共享链路上。广播的含义是当任何一个节点传输一个帧时，信道广播该帧，每个其他节点都收到一个副本，以太网和无线局域网均基于此实现。

???+ hint "hint"
    - 点对点链路 (point-to-point link) 由链路及其两端单一的发送方和接收方组成。很多链路层协议如 PPP、HDLC 基于此而设计。
    - 广播链路 (broadcast link) 能够让多个发送和接收节点接入到同一个共享链路上。广播的含义是当任何一个节点传输一个帧时，信道广播该帧，每个其他节点都收到一个副本，以太网和无线局域网均基于此实现。

!!! caution "caution"
    - 点对点链路 (point-to-point link) 由链路及其两端单一的发送方和接收方组成。很多链路层协议如 PPP、HDLC 基于此而设计。
    - 广播链路 (broadcast link) 能够让多个发送和接收节点接入到同一个共享链路上。广播的含义是当任何一个节点传输一个帧时，信道广播该帧，每个其他节点都收到一个副本，以太网和无线局域网均基于此实现。

???+ caution "caution"
    de

    - 点对点链路 (point-to-point link) 由链路及其两端单一的发送方和接收方组成。很多链路层协议如 PPP、HDLC 基于此而设计。
    - 广播链路 (broadcast link) 能够让多个发送和接收节点接入到同一个共享链路上。广播的含义是当任何一个节点传输一个帧时，信道广播该帧，每个其他节点都收到一个副本，以太网和无线局域网均基于此实现。


</font>