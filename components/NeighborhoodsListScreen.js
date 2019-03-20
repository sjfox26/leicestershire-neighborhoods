import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class NeighborhoodsListScreen extends Component {

    state = { data: [], loading: true };


    async componentDidMount() {
        await this.fetchNeighborhoods();
    }

    fetchNeighborhoods() {
        fetch('https://data.police.uk/api/leicestershire/neighbourhoods')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }


    render () {

        ///The following was used when I didn't have async await in above fetch call

        /*if (!this.state.loading) {
            return(<View/>);
        }*/

        console.log(this.state.data);

        return (
            <View >
                <Text>
                    Neighborhoods in Leicestershire:
                </Text>
                <FlatList
                    data={this.state.data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    }
                    keyExtractor={item => item.name}
                />
            </View>

        );
    }

}

export default NeighborhoodsListScreen;