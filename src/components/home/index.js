import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment'
import 'moment/locale/zh-cn';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            tagType: '',
        }
    }
    componentWillMount() {
        const type = this.props.match.params.type
        this.setState({
            tagType: type || 'all'
        })
        this.getPostData(type).then(res => {
            if (res.status === 200) {
                this.setState({
                    postList: res.data.data
                });
            } else {
                console.error(res.statusText)
            }
        }).catch(e => {
            console.warn(e);
        });

    }
    componentDidMount() {
           
    }
    componentWillReceiveProps() {
        const type = this.props.match.params.type
        this.setState({
            tabTypes: type || 'all'
        })
        if (this.state.tagType !== type) {
            this.getPostData(type).then(res => {
                if (res.status === 2000) {
                    this.setState({
                        postList: res.data.data
                    })
                 
                } else {
                    console.error(res.statusText)
                }
            }).catch(e => {
                console.warn(e)
            })
        }

    }
    getPostData(type) {
        return axios.get('https://cnodejs.org/api/v1/topics',{
                params: {
                    tab: type,
                }
            })
    }
    tabTypes(post) {
        const tab = post.tab
        const map = {
            'top': '置顶',
            'share': '分享',
            'good': '精华',
            'ask': '问答',
            'job': '招聘'
        }
        if (post.tab) {
            return map['top']
        }
        else if (post.good) {
            return map['good'];
        } else {
            return map[tab];
        }
    }
    getRouterTab() {
        const routeList = [
            { type: 'all', path: '/', text: '全部' },
            { type: 'elite', path: 'tag/elite', text: '精华' },
            { type: 'share', path: 'tag/share', text: '分享' },
            { type: 'ask', path: 'tag/ask', text: '问答' },
            { type: 'jop', path: 'tag/jop', text: '招聘' },
            { type: 'text', path: 'tag/text', text: '测试' }
        ]
        return routeList.map((router) => (
            <Link to={router.path} path={router.path} className={this.state.tagType === router.type ? "ui-tab on" : "ui-tab"}>{router.text}</Link>
        ))
    }
    render() {
        // console.log(this.state.postList)
        const listHtml = () => {
            return this.state.postList.map((post, index) => (
                <div className="cell">
                    <a className="user-avatar pull-left">
                        <img src={post.author.avatar_url}  alt="1" />
                    </a>
                    <span className="reply-count pull-left"><span className="count-of-replies" title="回复数">{post.reply_count}</span>
                        <span className="count-sperator">/</span>
                        <span className="count-of-visits" title="点击数">{post.visit_count}</span>
                    </span>
                    <a className="last-time pull-right">
                        <img className="user-small-avatar" src={post.author.avatar_url} alt={post.author.loginname}  />
                        <span className="last-active-time">{moment(post.last_reply_at).fromNow()}</span>
                    </a>
                    <div className="topic-title-wrapper">
                        <span className={(post.top || post.good) ? 'tag put-top': ' tag tab-common' }>{this.tabTypes(post)}</span>
                        <Link className="topic-title"  to={'/topic/'+post.id}>{post.title}</Link>
                    </div>
                </div>
            ))
        }
        const nodataHtml = () => (
            <div className="no-data">
                <h5>暂无数据...</h5>
            </div>
        )
        

        return (
            <div>
                <div className="h-panel">
                    <div className="h-header">{this.getRouterTab()}</div>
                    <div className="list-box">
                        {this.state.postList.length ? listHtml() : nodataHtml()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Home