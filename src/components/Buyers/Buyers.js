import React from 'react';
import styles from './Buyers.module.css';
import iconSearch from '../../assets/images/search_icon.png'

class Buyers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allBuyers: [
                'TestBuyer1',
                'TestBuyer2',
                'TestBuyer3',
                'TestBuyer4',
                'TestBuyer5',
                'TestBuyer6',
                'TestBuyer7',
                'TestBuyer8',
                'TestBuyer9',
                'TestBuyer10',
                'TestBuyer11',
                'TestBuyer12',
                'TestBuyer13',
                'TestBuyer14',
                'TestBuyer15',
            ],
            selectedValue: 'Select buyer',
            isListVisible: false,
            currentBuyer: ''
        };
    }

    onTextChange = (e) => {
        this.setState({currentBuyer: e.target.value});
    };

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
            selectedValue: e.target.value
        });
    };

    chooseItem = (e) => {
        this.setState({
            selectedValue: e.target.getAttribute('data-value'),
            currentBuyer: ''
        });
        this.toggleVisibility();
    };

    render() {
        return (
            <div className={styles.customSelect}>
                <select onChange={this.setValue}
                        className={styles.select}
                        value={this.state.selectedValue}>
                    <option value='Select buyer'>Select buyer</option>
                    {this.state.allBuyers.map((i, index) => <option key={index} value={i}>{i}</option>)}
                </select>
                <div className={`${styles.itemSelected} ${this.state.isListVisible ? `${styles.open}` : `${styles.close}`}`}
                     onClick={this.toggleVisibility}>
                    {this.state.selectedValue}
                </div>
                <div className={`${styles.list} ${!this.state.isListVisible ? `${styles.listHide}` : ''}`}
                     onMouseLeave={this.hideList}>
                    <label htmlFor="searchBuyer"
                           className={styles.searchField}>
                        <img src={iconSearch}
                             className={styles.iconSearch}
                             width={25}
                             alt=""/>
                        <input id="searchBuyer"
                               type="text"
                               autoComplete="off"
                               onChange={e => this.onTextChange(e)}
                               value={this.state.currentBuyer}
                               placeholder={'Tes'}/>
                    </label>
                    {(this.state.allBuyers.map((i, index) => (i.indexOf(this.state.currentBuyer) >= 0 ?
                        <div key={index}
                             data-value={i}
                             className={styles.listItem}
                             onClick={this.chooseItem}>
                            {i}
                        </div>
                        : null)))}
                </div>
            </div>
        );
    }
}

export default Buyers;
