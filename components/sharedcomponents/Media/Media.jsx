import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {pick} from '@react-native-documents/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import RequestStoragePermission from '../../../Services/RequestStoragePermission';
import Icon from 'react-native-vector-icons/Entypo';

const Media = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]); // Nouvel état pour stocker les fichiers importés

  const handlePress = async () => {
    const hasPermission = await RequestStoragePermission();
    if (!hasPermission) {
      Alert.alert(
        'Permission denied',
        'Cannot access storage without permission.',
      );
      return;
    }

    try {
      const [pickResult] = await pick();
      if (pickResult) {
        setFiles(prevFiles => [...prevFiles, pickResult]); // Ajouter à la liste des fichiers
      }
    } catch (err) {
      console.log(err); // Gérez les erreurs ici
    }
  };

  const handlePress2 = async () => {
    const cameraPermission = await request(PERMISSIONS.ANDROID.CAMERA);
    const photoLibraryPermission = await request(
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    );

    if (
      cameraPermission === RESULTS.GRANTED &&
      photoLibraryPermission === RESULTS.GRANTED
    ) {
      const result = await launchCamera({
        mediaType: 'photo',
        cameraType: 'back',
        quality: 1,
      });

      if (result.assets && result.assets.length > 0) {
        const newFile = result.assets[0];
        setFiles(prevFiles => [...prevFiles, newFile]); // Ajouter à la liste des fichiers
      }
    } else {
      Alert.alert(
        'Permission denied',
        'Camera or Storage permission is required',
      );
    }
  };

  const handlePress3 = async () => {
    const photoLibraryPermission = await request(
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    );

    if (photoLibraryPermission === RESULTS.GRANTED) {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
      });

      if (result.assets && result.assets.length > 0) {
        const newFile = result.assets[0];
        setFiles(prevFiles => [...prevFiles, newFile]); // Ajouter à la liste des fichiers
      }
    } else {
      Alert.alert('Permission denied', 'Storage permission is required');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="attachment" size={24} color="black" onPress={handlePress} />
        <Icon name="camera" size={24} color="black" onPress={handlePress2} />
        <Icon name="image" size={24} color="black" onPress={handlePress3} />
      </View>

      {/* Afficher les fichiers dans une vue défilante horizontalement */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {files.map((item, index) => (
          <View key={index} style={styles.fileBox}>
            {/* Affichez une vignette pour les images */}
            {item.uri && (
              <Image source={{uri: item.uri}} style={styles.thumbnail} />
            )}
            {/* Affichez d'autres informations sur le fichier */}
            <Text style={styles.fileName}>{item.fileName || 'No name'}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  scrollView: {
    marginTop: 10,
  },
  fileBox: {
    width: 100,
    height: 120,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  fileName: {
    fontSize: 14,
    marginTop: 5,
    color: '#333',
    textAlign: 'center',
  },
});

export default Media;
