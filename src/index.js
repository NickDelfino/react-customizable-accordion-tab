import React, {Component} from 'react';
import Plus from '../assets/plus-solid.svg';
import Minus from '../assets/minus-solid.svg';

export default class Accordion extends Component {
    constructor(props) {
        super(props);
        const { show } = props;

        this.state = {
            show: show
        };

        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    showDropdownArrow(){

        const { showIcon, hiddenIcon } = this.props;

        if(this.state.show){
            return hiddenIcon ? hiddenIcon : <Minus style={styles.iconStyle}/>;
        }else{
            return showIcon ? showIcon : <Plus style={styles.iconStyle}/>;
        }
    }

    onHeaderClick(){
        this.setState({ show: !this.state.show })
    }

    renderHeader(){
        const { title, headerContainerStyle } = this.props;

        return(
            <div
                style={{...styles.headerContainerStyle, ...headerContainerStyle}}
                onClick={this.onHeaderClick}
            >
                <div
                    style={styles.titleContainer}
                >
                    {title ? title : <p>N/A</p>}
                </div>
                {this.showDropdownArrow()}
            </div>
        )
    }

    renderContent(){
        const { contentContainerStyle } = this.props;

        const openStyle = this.state.show ? styles.openContent : null;

        return(
            <div
                style={{...styles.contentContainerStyle, ...openStyle, ...contentContainerStyle}}
            >
                {this.props.children}
            </div>
        );
    }

    render() {

        const { accordionTabContainerStyle } = this.props;

        return (
            <div
                style={{...styles.accordionTabContainerStyle, ...accordionTabContainerStyle}}
            >
                {this.renderHeader()}
                {this.renderContent()}
            </div>
        );
    }
}

const styles = {
    headerContainerStyle: {
        border: 'solid thin #c1c1c1',
        margin: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        minHeight: 50
    },
    contentContainerStyle: {
        opacity: 0,
        boxSizing: 'border-box',
        borderBottom: 'solid thin #c1c1c1',
        borderRight: 'solid thin #c1c1c1',
        borderLeft: 'solid thin #c1c1c1',
        maxHeight: 0,
        overflow: 'hidden',
        padding: 0,
        transitionProperty: 'max-height opacity',
        transitionDuration: '500ms',
        WebkitTransitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        MozTransitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        OTransitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        transitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
    },
    titleContainer: {
        overflow: 'auto'
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    openContent: {
        opacity: 1,
        maxHeight: 400,
        overflow: 'scroll'
    },
    accordionTabContainerStyle: {
    }
};