import React, {Component} from 'react';
import '../assets/App.css';
import '../assets/ImageContainer.css';
import '../assets/react-contextmenu.css';
import Grid from './Grid';


class FeedPlanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            scheduled: [],
            profiles: [],
            selected: 1,
            token: "",
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        window.hsp.init({
            useTheme: false,
        });

        window.hsp.bind(
            'refresh',
            (data) => {
                this.refresh(this.state.selected);
            }
        );
        this.refresh(this.state.selected);
    }

    async refresh(selected) {
        await this.authenticate();
        this.getScheduled(selected);
        this.getProfiles();
    }

    authenticate() {
        return new Promise((resolve) => {
            window.hsp.getAuth((data) => {
                console.log(data);
                fetch(`/authenticate/${data.i}?token=${this.state.token}`)
                    .then(res => res.json())
                    .then(res => {
                        this.setState({token: res.access_token, loading: false});
                        resolve(res.access_token);
                    })
                    .catch(err => console.log(err));
            });
        });
    }

    getScheduled(socialMediaId) {
        fetch(`/scheduled?token=${this.state.token}`, {
            method: 'GET',
        }).then(res => res.json())
            .then(async res => {
                if(res.error_description === "token_expired") {
                    await this.authenticate();
                    this.getScheduled(socialMediaId);
                }
                return res;
            })
            .then((res) => {
                if(res.data) {
                    return res.data.filter((item) => {
                        return item.socialProfile.id === socialMediaId.toString();
                    });
                } return [];

            })
            .then(json => this.processScheduledImages(json))
            .then(() => this.setState({loading: false}))
            .catch((err) => console.log(err));
    }

    getProfiles() {
        fetch(`/profiles?token=${this.state.token}`, {
            method: 'GET',
        }).then(res => res.json())
            .then(res => res.data.filter((profile) => profile.type === "INSTAGRAM" ? profile.socialNetworkUsername : false))
            .then(json => this.setState({profiles: json}))
            .then(() => this.setState({loading: false}))
            .catch((err) => console.log(err));
    }

    handleProfileSelect(id) {
        this.setState({
            loading: true,
            selected: id,
        });
        this.getScheduled(id);
    }

    render() {
        console.log(this.state);
        let listItems = [];
        if (this.state.profiles) {
            listItems = this.state.profiles.map((profile) => {
                return (
                    <div key={profile.id}>
                        <input type="radio" name="instagrams" id={profile.id} onClick={(e) => this.handleProfileSelect(profile.id, e)}/>
                        <label htmlFor={profile.id}>{profile.socialNetworkUsername}</label>
                    </div>
                )
            });
        }

        let noImagesText = this.state.scheduled.length === 0 && parseInt(this.state.selected) !== 1 && this.state.loading !== true ?  <p>You have no Instagram posts scheduled for this account.</p> : null;
        let notSelectedText = parseInt(this.state.selected) === 1 && this.state.loading !== true ? <p>Select an account to view scheduled posts.</p> : null;

        let loading = this.state.loading ? <p>Loading...</p> : null;
        return (
            <div className="container-app">
                <h3>Feed Preview</h3>
                {listItems}
                <hr/>
                <div className="gallery">
                    {loading}
                    {notSelectedText}
                    {noImagesText}
                    {this.state.loading !== true ?  <Grid items={this.state.scheduled} disabled={true}/> : null }
                </div>
            </div>
        )
    }

    processScheduledImages(json) {
        let images = [];
        json.forEach((image, index) => {
            images.push({
                src: image.mediaUrls[0].url,
                id: index,
            })
        });
        this.setState({scheduled: images})
    }
}

export default FeedPlanner;
