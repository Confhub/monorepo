import React from 'react';
import data from '../data/conf';

const { Provider, Consumer } = React.createContext();

class MainContextProvider extends React.Component {
    state = {
       hoveredItem: null,
        items: data,
    };

    onEnter = (id) => {
        this.setState({
            hoveredItem: id,
        })
    };

    onLeave = (id) => {
        this.setState(prevState => ({
            hoveredItem: id === prevState.id ? null : prevState.id,
        }))
    };

    render() {
        const { hoveredItem, items } = this.state;
        const context = {
            onEnter: this.onEnter,
            onLeave: this.onLeave,
            hoveredItem,
            items,
        };
        return (
            <Provider value={context}>
                {this.props.children}
            </Provider>
        )
    }
}

export default {
    Provider: MainContextProvider,
    Consumer,
};
