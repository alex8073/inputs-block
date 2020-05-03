import React from 'react';
import styles from './Users.module.css';
import userPickMan from '../../assets/images/userpick_man.jpg';
import userPickWoman from '../../assets/images/userpick_woman.jpg';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [
                {id: 1, photo: `${userPickWoman}`, name: 'Vanessa'},
                {id: 2, photo: `${userPickMan}`, name: 'Car Title'},
            ],
            selectedUserName: 'All users',
            selectedUserPhoto: '',
            isListVisible: false,
        };
    }

    toggleVisibility = () => {
        this.setState(state => ({
            isListVisible: !state.isListVisible
        }));
    };

    hideList = () => {
        this.setState(state => ({
            isListVisible: false
        }));
    };

    setValue = (e) => {
        this.setState({
            selectedUserName: e.target.value
        });
    };

    chooseItem = (e) => {
        this.setState({
            selectedUserName: e.target.getAttribute('data-value'),
            selectedUserPhoto: e.target.getAttribute('data-photo'),
        });
        this.toggleVisibility();
    };

    render() {
        return (
            <div className={styles.customSelect}>
                <select onChange={this.setValue}
                        className={styles.select}
                        value={this.state.selectedUserName}>
                    <option value='All users'>All users</option>
                    {this.state.allUsers.map((i, index) => <option key={index} value={i.name}>{i.name}</option>)}
                </select>
                <div className={`${styles.itemSelected} ${this.state.isListVisible ? `${styles.open}` : `${styles.close}`}`}
                     onClick={this.toggleVisibility}>
                    {this.state.selectedUserPhoto ?
                        <img src={this.state.selectedUserPhoto} className={styles.userPhoto} alt=""/>
                        : null}
                    {this.state.selectedUserName}
                </div>
                <div className={`${styles.list} ${!this.state.isListVisible ? `${styles.listHide}` : ''}`}
                     onMouseLeave={this.hideList}>
                    <div data-value="All users"
                         className={styles.listItem}
                         onClick={this.chooseItem}>
                        All users
                    </div>
                    {(this.state.allUsers.map((i, index) => <div key={index}
                                                                 data-value={i.name}
                                                                 data-photo={i.photo}
                                                                 className={styles.listItem}
                                                                 onClick={this.chooseItem}>
                        <img src={i.photo} className={styles.userPhoto} alt=""/>
                        {i.name}
                    </div>))}
                </div>
            </div>
        );
    }
}

export default Users;
