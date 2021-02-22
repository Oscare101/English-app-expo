import React from 'react'
import { View, ScrollView } from 'react-native'

import S from '../lessons/S'
import Header from './Header'
import Page from './Page'

import Very from '../lessons/Very'
import PastSimple from '../lessons/PastSimple'
import PastContinuous from '../lessons/PastContinuous'
import PresentContinuous from '../lessons/PresentContinuous'
import PresentSimple from '../lessons/PresentSimple'
import Prepositions from '../lessons/Prepositions'
import PresentPerfectContinuous from '../lessons/PresentPerfectContinuous'
import PresentPerfect from '../lessons/PresentPerfect'
import Obligation from '../lessons/Obligation'
import Possibility from '../lessons/Possibility'

const Screen1 = () => {
  return (
    <View style={S.View}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={S.blockList}>
          <Page title="times" />

          <PastSimple />
          <PastContinuous />

          <PresentSimple />
          <PresentContinuous />

          <PresentPerfect />
          <PresentPerfectContinuous />

          <Page title="grammar" />

          <Possibility />
          <Obligation />
          <Prepositions />

          <Page title="cheat sheets" />

          <Very />
        </View>
      </ScrollView>
    </View>
  )
}

export default Screen1
