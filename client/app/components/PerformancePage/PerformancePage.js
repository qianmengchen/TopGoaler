import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { board, title, text, infoCard, leftPart, rightPart } from './styles';
import { periodDecoder } from '../../constants';
import { _get } from '../../actions';

class PerformancePage extends Component {
  //utils
  _day_task_reducer = (acc, val) => {
    const now = new Date();
    if (val && now - val.create_time <= periodDecoder[0]) {
      return acc + 1;
    } else {
      return acc;
    }
  };

  _day_task = () => {
    return this.props.userActivities.reduce(this._day_task_reducer, 0);
  };

  _week_task_reducer = (acc, val) => {
    const now = new Date();
    if (val && now - val.create_time <= periodDecoder[1]) {
      return acc + 1;
    } else {
      return acc;
    }
  };

  _week_task = () => {
    return this.props.userActivities.reduce(this._week_task_reducer, 0);
  };

  _month_task_reducer = (acc, val) => {
    const now = new Date();
    if (val && now - val.create_time <= periodDecoder[2]) {
      return acc + 1;
    } else {
      return acc;
    }
  };

  _month_task = () => {
    return this.props.userActivities.reduce(this._month_task_reducer, 0);
  };

  _get_last_months = () => {
    const now = new Date().getMonth();
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    return months.slice(now - 5, now + 1);
  };

  _specific_month_task_reducer = month => (acc, val) => {
    const now_year = new Date().getFullYear();
    if (
      val &&
      val.create_time.getFullYear() === now_year &&
      val.create_time.getMonth() + 1 === month
    ) {
      return acc + 1;
    } else {
      return acc;
    }
  };

  _specific_month_task = month => {
    return this.props.userActivities.reduce(
      this._specific_month_task_reducer(month),
      0
    );
  };

  _get_last_tasks_num = () => {
    const start = new Date().getMonth() - 4;
    return Array.apply(null, Array(6)).map((x, i) => {
      return this._specific_month_task(start + i);
    });
  };

  async _loadScores() {
    const { userId, subscribed_channels } = this.props;
    console.log(userId);
    const channel_point = {};
    for (const { channel_id } of subscribed_channels.keys()) {
      try {
        const { score } = await (await _get(
          `/score/${userId}&${channel_id}`
        )).json();
        channel_point[channel_id] = score;
      } catch (e) {
        channel_point[channel_id] = 0;
      }
    }
    return { channel_point };
  }

  UNSAFE_componentWillMount() {
    this._loadScores().then(res => {
      this.setState({ ...res });
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      channel_point: {}
    };
  }

  render() {
    console.log(this.state.channel_point);
    return (
      <View style={board.container}>
        <View style={board.title}>
          <Text style={title.main}>Performance</Text>
        </View>
        <View style={board.infoCard}>
          <View style={infoCard.leftPart}>
            <View style={leftPart.subtitle}>
              <Text style={title.sub}>Task Done</Text>
            </View>
            <View style={leftPart.number}>
              <Text style={text.number}>{this._day_task()}</Text>
              <Text style={text.number}>{this._week_task()}</Text>
              <Text style={text.number}>{this._month_task()}</Text>
            </View>
            <View style={leftPart.period}>
              <Text style={text.period}>Day</Text>
              <Text style={text.period}>Week</Text>
              <Text style={text.period}>Month</Text>
            </View>
          </View>
          <View style={infoCard.rightPart}>
            <View style={rightPart.subtitle}>
              <Text style={title.sub}>Scores</Text>
            </View>
            <ScrollView contentContainerStyle={rightPart.stats}>
              {Array.from(this.props.subscribed_channels.keys()).map(id => {
                const { channel_id } = id;
                const channel_title = this.props.channels[channel_id.toString()]
                  .title;
                var point = this.state.channel_point[channel_id];
                if (!point) point = 0;
                return (
                  <Text key={id.channel_id} style={text.stat}>
                    #{channel_title}: {point}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View style={board.chart}>
          <LineChart
            data={{
              labels: this._get_last_months(),
              datasets: [{ data: this._get_last_tasks_num() }]
            }}
            width={Dimensions.get('window').width - 40}
            height={300}
            chartConfig={{
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 15
            }}
          />
        </View>
      </View>
    );
  }
}

export default PerformancePage;
