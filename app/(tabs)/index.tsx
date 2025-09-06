import CartButton from '@/components/CartButton';
import { images, offers } from '@/constants';
import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.deliverTo}>DELIVER TO</Text>
          <TouchableOpacity style={styles.locationBtn}>
            <Text style={styles.locationText}>Croatia</Text>
            <Image source={images.arrowDown} style={styles.arrowDown} resizeMode='contain'/>
          </TouchableOpacity>
        </View>
        <CartButton />
      </View>
      <FlatList
        data={offers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View style={{ marginBottom: 16 }}>
              <Pressable
                style={[
                  styles.offerCard,
                  { backgroundColor: item.color, flexDirection: isEven ? 'row-reverse' : 'row' }
                ]}
                android_ripple={{ color: "#fffff22" }}
              >
                <View style={styles.offerImageWrap}>
                  <Image source={item.image} style={styles.offerImage} resizeMode="contain" />
                </View>
                <View style={[
                  styles.offerInfo,
                  isEven ? { paddingLeft: 40, paddingRight: 0 } : { paddingRight: 40, paddingLeft: 0 }
                ]}>
                  <Text style={styles.offerTitle}>{item.title}</Text>
                  <Image
                    source={images.arrowRight}
                    style={styles.arrowRight}
                    resizeMode='contain'
                  />
                </View>
              </Pressable>
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 28, paddingHorizontal: 20 }}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    marginVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
   
    
  },
  headerLeft: {
    justifyContent: 'center',
    
  },
  deliverTo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#d33b0d',
    marginBottom: 2,
  },
  locationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22223b',
  },
  arrowDown: {
    width: 12,
    height: 12,
    marginLeft: 4,
  },
  cartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22223b',
  },
  offerCard: {
    width: '100%',
    height: 192,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
    gap: 20,
  },
  offerImageWrap: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerImage: {
    width: '100%',
    height: '100%',
  },
  offerInfo: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 16,
  },
  offerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 34,
  },
  arrowRight: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
});