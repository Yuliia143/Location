import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import SafeArea from 'react-native-safe-area';

export const useCalculateSafeArea = () => {
    const [safeAreaTopHeight, setSafeAreaTopHeight ] = useState(0);
    const [safeAreaBottomHeight, setSafeAreaBottomHeight ] = useState(0);
    const HEADER_FOOTER_HEIGHT = 170;
    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        SafeArea.getSafeAreaInsetsForRootView()
        .then((result) => {
          setSafeAreaTopHeight(result.safeAreaInsets.top);
          setSafeAreaBottomHeight(result.safeAreaInsets.bottom);
        })
    })
    const contentHeight = windowHeight - safeAreaTopHeight - safeAreaBottomHeight - HEADER_FOOTER_HEIGHT;
    return contentHeight;
}