import React, {Component} from 'react';
import {Dropdown } from 'semantic-ui-react'

const profilesOptions = [
    {
        key: 'profile1.jpg',
        text: 'Profile 1',
        value: 'profile1.jpg',
        image: {avatar: true, src: '/images/profile/profile1.jpg'},
    },
    {
        key: 'profile2.jpg',
        text: 'Profile 2',
        value: 'profile2.jpg',
        image: {avatar: true, src: '/images/profile/profile2.jpg'},
    },
    {
        key: 'profile3.jpg',
        text: 'Profile 3',
        value: 'profile3.jpg',
        image: {avatar: true, src: '/images/profile/profile3.jpg'},
    },
    {
        key: 'profile4.jpg',
        text: 'Profile 4',
        value: 'profile4.jpg',
        image: {avatar: true, src: '/images/profile/profile4.jpg'},
    },
    {
        key: 'profile5.jpg',
        text: 'Profile 5',
        value: 'profile5.jpg',
        image: {avatar: true, src: '/images/profile/profile5.jpg'},
    },
    {
        key: 'profile6.jpg',
        text: 'Profile 6',
        value: 'profile6.jpg',
        image: {avatar: true, src: '/images/profile/profile6.jpg'},
    },
    {
        key: 'profile7.jpg',
        text: 'Profile 7',
        value: 'profile7.jpg',
        image: {avatar: true, src: '/images/profile/profile7.jpg'},
    },
    {
        key: 'profile8.jpg',
        text: 'Profile 8',
        value: 'profile8.jpg',
        image: {avatar: true, src: '/images/profile/profile8.jpg'},
    },
    {
        key: 'profile9.jpg',
        text: 'Profile 9',
        value: 'profile9.jpg',
        image: {avatar: true, src: '/images/profile/profile9.jpg'},
    },
    {
        key: 'profile10.jpg',
        text: 'Profile 10',
        value: 'profile10.jpg',
        image: {avatar: true, src: '/images/profile/profile10.jpg'},
    },
    {
        key: 'profile11.jpg',
        text: 'Profile 11',
        value: 'profile11',
        image: {avatar: true, src: '/images/profile/profile11.jpg'},
    }
]

export default class DropDownProfile extends Component{
    render(){
        return(
            <Dropdown placeholder='Select Friend'
                      fluid
                      selection
                      value={this.props.value}
                      options={profilesOptions}
                      onChange={this.props.onHandleChangeProfile} />
        )
    }

}

