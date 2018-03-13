import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => (
    <div>
        <div className="h-panel">
            <div className="h-header">
                <a className="ui-tab">全部</a>
                <a className="ui-tab on">精华</a>
                <a className="ui-tab">分享</a>
                <a className="ui-tab">问答</a>
                <a className="ui-tab">招聘</a>
                <a className="ui-tab">测试</a>
            </div>
            <div className="list-box">
                <div className="cell">
                    <a className="user-avatar pull-left">
                        <img src="https://avatars2.githubusercontent.com/u/3140898?v=4&amp;s=120" alt="shanelau" />
                    </a>
                    <span className="reply-count pull-left"><span className="count-of-replies" title="回复数">5</span>
                        <span className="count-sperator">/</span>
                        <span className="count-of-visits" title="点击数">489</span>
                    </span>
                    <a className="last-time pull-right">
                        <img className="user-small-avatar" src="https://avatars2.githubusercontent.com/u/3140898?v=4&amp;s=120" alt="shanelau" />
                        <span className="last-active-time">7 分钟前</span>
                    </a>
                    <div className="topic-title-wrapper">
                        <span className=" tag tab-common">招聘</span>
                        <a className="topic-title" href="#/topic/5a8f806371327bb413bbfd8c">『杭州』星火矿池招聘「会计师」</a>
                    </div>
                </div>

                <div className="cell">
                    <a className="user-avatar pull-left">
                        <img src="https://avatars2.githubusercontent.com/u/3140898?v=4&amp;s=120" alt="shanelau" />
                    </a>
                    <span className="reply-count pull-left"><span className="count-of-replies" title="回复数">5</span>
                        <span className="count-sperator">/</span>
                        <span className="count-of-visits" title="点击数">489</span>
                    </span>
                    <a className="last-time pull-right">
                        <img className="user-small-avatar" src="https://avatars2.githubusercontent.com/u/3140898?v=4&amp;s=120" alt="shanelau" />
                        <span className="last-active-time">7 分钟前</span>
                    </a>
                    <div className="topic-title-wrapper">
                        <span className=" tag tab-common">招聘</span>
                        <a className="topic-title" href="#/topic/5a8f806371327bb413bbfd8c">『杭州』星火矿池招聘「会计师」</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Home