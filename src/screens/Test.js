<<<<<<< HEAD
import {getTopArtistsOrTracks, getUserInfo, getAudioAnalysisOfSong, getRecommendations, getRecommendationsAdvanced, getRecentlyPlayed, getUserProfilePic } from "../utils/Queries";
import { Button, SafeAreaView, View } from 'react-native';
=======
import {
  getTopArtistsOrTracks,
  getAudioAnalysisOfSong,
  getRecommendations,
  getRecommendationsAdvanced,
  getRecentlyPlayed,
} from "../utils/Queries";
import { Button, SafeAreaView, View } from "react-native";
>>>>>>> 771a152ca86dc53b580d801f06f84da68b2584b5
import Song from "../Components/Song";

const payload = {
  seed_artists:
    "4YjpqCSDD7zwMQgPYJMqb0,7Hvq85OU8T7Hsd63zNBwaL," + "2wXUKlYvdBHn2MNeRKgG6W",
  seed_genres: "",
  seed_tracks: "",
  limit: 5,
};

async function testFunc() {
  const test = await getTopArtistsOrTracks("tracks", "long_term", 5);
  Song(test[0]);
}

const Test = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button title="test" onPress={() => testFunc()} />
    </SafeAreaView>
  );
};

export default Test;
