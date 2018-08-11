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
            <div className="content-header"
                onClick={this.onHeaderClick}
                style={{...styles.headerContainerStyle, ...headerContainerStyle}}
            >
                {title ? title : <p>N/A</p>}
                {this.showDropdownArrow()}
            </div>
        )
    }

    renderContent(){
        if(this.state.show){

            const { contentContainerStyle } = this.props;

            return(
                <div
                    className="content"
                    style={{...styles.contentContainerStyle, ...contentContainerStyle}}
                >
                    {this.props.children}
                </div>
            );
        }
    }

    render() {

        const { accordionTabContainerStyle } = this.props;

        return (
            <div style={{...styles.accordionTabContainerStyle, ...accordionTabContainerStyle}}>
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
        height: 50
    },
    contentContainerStyle: {
        opacity: 1.0,
        boxSizing: 'border-box',
        transition: 'height 500ms 0ms, opacity 500ms 500ms',
        borderBottom: 'solid thin #c1c1c1',
        borderRight: 'solid thin #c1c1c1',
        borderLeft: 'solid thin #c1c1c1',
        padding: 10
    },
    accordionTabContainerStyle: {
        margin: 5
    },
    iconStyle: {
        width: 30,
        height: 30
    }
};