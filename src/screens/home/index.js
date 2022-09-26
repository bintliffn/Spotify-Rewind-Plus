import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import {
  getUserInfo,
  getTopArtistsOrTracks,
  getRecentlyPlayed,
} from "@src/utils/Queries";
import React from "react";
import { styles } from "@src/screens/home/homeStyles";
import Song from "@src/components/DisplaySong/Song";
import Artist from "@src/components/DisplayArtist/Artist";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Home({ navigation }) {
  const [display, setDisplay] = React.useState();

  const [username, setUsername] = React.useState();
  const [topSong, setTopSong] = React.useState();
  const [topArtist, setTopArtist] = React.useState();
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = React.useState();

  async function fetchData() {
    const userInfo = await getUserInfo();
    setUsername(userInfo.display_name);
    const topSongsResponse = await getTopArtistsOrTracks(
      "tracks",
      "long_term",
      10
    );
    setTopSong(topSongsResponse[0]);
    const topArtistsResponse = await getTopArtistsOrTracks(
      "artists",
      "long_term",
      10
    );
    setTopArtist(topArtistsResponse[0]);
    const recentlyPlayedTracksResponse = await getRecentlyPlayed();
    setRecentlyPlayedTracks(recentlyPlayedTracksResponse);
    setDisplay(true);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={[styles.masterView]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
      >
        {display ? (
          <View>
            <View style={[styles.welcomeView]}>
              <Text style={[styles.welcomeText]}>Welcome {username}!</Text>
            </View>
            <View style={[styles.buffer]} />
            <Text style={[styles.topItemText]}>Your Top Song</Text>
            <View style={[styles.songOrArtistView]}>
              <Song SingleJsonSong={topSong} />
            </View>
            <View style={[styles.buffer]} />
            <Text style={[styles.topItemText]}>Your Top Artist</Text>
            <View style={[styles.songOrArtistView]}>
              <Artist SingleJsonArtist={topArtist} />
            </View>
            <View style={[styles.buffer]} />
            <Text style={[styles.topItemText]}>Recently Played Tracks</Text>
            <Song SingleJsonSong={recentlyPlayedTracks[0].track} />
            <Song SingleJsonSong={recentlyPlayedTracks[1].track} />
            <Song SingleJsonSong={recentlyPlayedTracks[2].track} />
            <Song SingleJsonSong={recentlyPlayedTracks[3].track} />
            <Song SingleJsonSong={recentlyPlayedTracks[4].track} />
          </View>
        ) : (
          <Text style={[styles.renderingText]}>RENDERING DATA</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
