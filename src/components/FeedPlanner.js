import React, {Component} from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import ContextMenuImage from "./ContextMenu";
import '../assets/react-contextmenu.css';
import Grid from './Grid';


class FeedPlanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            loading: true,
            scheduled: [],
            profiles: [],
        };
    }

    componentDidMount() {
        console.log('componentDidmount');

        window.hsp.init({
            useTheme: false,
        });

        window.hsp.getAuth((data) => {
        });
        this.getScheduled(393);
        this.getProfiles();
    }

    getScheduled(socialMediaId) {
        fetch(`/scheduled`, {
            method: 'GET',
        }).then(res => res.json())
            .then((res) => {
                res.data.filter((item) => {
                    console.log(item);
                   if (Object.values(item.socialProfile).indexOf(socialMediaId.toString())) {
                       console.log('true', Object.values(item.socialProfile).indexOf(socialMediaId));
                       return true;
                   } else {
                       return false;
                   }
                });
            })
            .then(json => this.setState({scheduled: json}))
            .catch((err) => console.log(err));
    }

    getProfiles() {
        fetch(`/profiles`, {
            method: 'GET',
        }).then(res => res.json())
            .then(res => res.data.filter((profile) => profile.type === "INSTAGRAM" ? profile.socialNetworkUsername : false))
            .then(json => this.setState({profiles: json}))
            .catch((err) => console.log(err));
    }

    handleProfileSelect(e, id) {
        console.log(e);
        console.log('handleProfileSelectId', id);
        this.getScheduled(id);
    }


    render() {
        console.log(this.state);
        let listItems = [];
        if (this.state.profiles) {
            listItems = this.state.profiles.map((profile) => {
                return (
                    <div key={profile.id}>
                        <input type="radio" name="instagrams" id={profile.id} onClick={this.handleProfileSelect.bind(this, profile.id)}/>
                        <label htmlFor={profile.id}>{profile.socialNetworkUsername}</label>
                    </div>
                )
            });
        }

        return (
            <div className="container-app">
                <h3>Feed Preview</h3>
                {listItems}
                <div className="gallery">
                    <Grid items={this.state.images} disabled={true}/>
                </div>
                <ContextMenuImage handleClick={console.log('clicked on contextmenu item', this)}/>
            </div>
        )
    }


}

export default FeedPlanner;
