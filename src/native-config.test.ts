import { describe, expect, it } from 'vitest'
import { nativeAppConfig } from './native-config'

describe('nativeAppConfig', () => {
  it('uses the stable Android identity and local web bundle', () => {
    expect(nativeAppConfig).toEqual({
      appId: 'com.yuuu705128.personalworkbench',
      appName: '我的行动工作台',
      webDir: 'dist',
      androidMinSdkVersion: 26,
    })
  })
})
