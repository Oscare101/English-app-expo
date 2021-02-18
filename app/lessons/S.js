import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import color from '../components/color'

const { width } = Dimensions.get('screen')
const S = StyleSheet.create({
  View: {
    flex: 1,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.backgroundColor,
    flexDirection: 'column',
  },
  screenHeader: {
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey',
    // marginBottom: 2,
    paddingTop: 5,
    backgroundColor: color.headerLessonColor,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 26,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  block: {
    margin: 3,
    width: width * 0.48,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 10,
    alignSelf: 'center',
  },
  firstTitle: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  blockList: {
    paddingBottom: 80,
    flex: 1,
    width,
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
  blockLesson: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  like: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  lesson: {
    padding: 0,
    flex: 1,
  },
  header: {
    padding: 10,
    paddingRight: 60,
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  colorBg: {
    backgroundColor: color.headerLessonColor,
  },
  view: {
    flex: 1,
    padding: 10,
    paddingTop: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  text: { fontSize: 20 },
  h1: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 5,
  },
  h3: {
    fontSize: 22,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  c: {
    backgroundColor: color.commentBlock,
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  ct: {
    fontSize: 18,
    color: color.commentText,
  },
  w: {
    backgroundColor: color.warningBlock,
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  wt: {
    fontSize: 18,
    color: color.warningText,
  },
  h: {
    backgroundColor: color.hintBlock,
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  ht: {
    fontSize: 18,
    color: color.hintText,
  },
  a: {
    backgroundColor: color.attentionBlock,
    borderRadius: 10,
    padding: 10,
    margin: 3,
  },
  at: {
    fontSize: 18,
    color: color.attentionText,
  },
  b: { fontWeight: 'bold' },
  i: { fontStyle: 'italic' },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
  share: {
    backgroundColor: color.backgroundColor,
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    borderColor: color.bottomNavActive,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
  },
  shareText: {
    fontSize: 26,
    letterSpacing: 5,
  },
  settings: {
    width: width * 0.97,
  },
  titleOrange: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.examplesTitle,
  },
  hint: {
    backgroundColor: color.exampleHint,
    borderRadius: 7,
    alignSelf: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textHint: {
    textShadowColor: '#B9EA00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    color: '#489C00',
  },
  blockWithGreen: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: color.hintBlock,
  },
  paddingBottomLesson: {
    paddingBottom: 20,
  },
})

export default S
