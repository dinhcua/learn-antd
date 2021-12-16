import React, { useState } from 'react';
import { Mentions } from 'antd';
import axios from 'axios';


const { Option } = Mentions;

export default function Detail1() {
    const [search, setSreach] = useState('')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])


    const onSearch = search => {
        setSreach(search)
        setLoading(!!search)
        console.log('Search:', search);
        loadGithubUsers(search);
    };

    const loadGithubUsers = (key) => {
        console.log(key);
        if (!key) {
            setUsers([])
            return;
        }

        axios.get(`https://api.github.com/search/users?q=${key}`).then(res => {
            setUsers(res.data.items.slice(0, 10))
            setLoading(false)
        });
    }

    return (
        <Mentions style={{ width: '100%' }} loading={loading} onSearch={onSearch}>
            {users.map(({ login, avatar_url: avatar }) => (
                <Option key={login} value={login} className="antd-demo-dynamic-option">
                    <img src={avatar} alt={login} className='avatar' />
                    <span>{login}</span>
                </Option>
            ))}
        </Mentions>
    );
}