import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Slider = () => {
	const flatlistRef = useRef();
	const screenWidth =  Dimensions.get("window").width;
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === carouselData.length - 1) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animation: true,
				});
			} else {
				flatlistRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 2000);

		return () => clearInterval(interval);
	});

	const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
		index: index,
	});
	// Data for carousel
	const carouselData = [
		{
			id: "01",
			image: require("../assets/banner.png"),
		},
		{
			id: "02",
			image: require("../assets/slider_2.png"),
		},
		{
			id: "03",
			image: require("../assets/slider_3.png"),
		},
        {
            id:"04",
            image: require("../assets/slider_1.png")
        }
	];

	//  Display Images // UI
	const renderItem = ({ item, index }) => {
		return (
			<View style={{borderRadius: 20}}>
				<Image
					source={item.image}
					style={{ height: 120, width: screenWidth}}
				/>
			</View>
		);
	};

	const handleScroll = (event) => {
		const scrollPosition = event.nativeEvent.contentOffset.x;
		const index = Math.round(scrollPosition / screenWidth);
		setActiveIndex(index);
	};

	const renderDotIndicators = () => {
		return carouselData.map((dot, index) => {
			if (activeIndex === index) {
				return (
					<View
						style={{
							backgroundColor: "green",
							height: 10,
							width: 10,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			} else {
				return (
					<View
						key={index}
						style={{
							backgroundColor: "grey",
							height: 10,
							width: 10,
							borderRadius: 5,
							marginHorizontal: 6,
						}}
					></View>
				);
			}
		});
	};

	return (
		<View style={{marginBottom: 20}}>
			<FlatList
				data={carouselData}
				ref={flatlistRef}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				pagingEnabled={true}
				onScroll={handleScroll}
			/>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: -30,
				}}
			>
				{renderDotIndicators()}
			</View>
		</View>
	);
};

export default Slider;

const styles = StyleSheet.create({});