export declare global {
  namespace ReactNavigation {
    interface RootParamList {
        home: undefined,
        statistics: undefined,
        mealForm: {
          id?: string
        } | undefined,
        mealInfo: {
          id: string,
          type: 'GOOD' | 'BAD'
        },
        mealFeedback: {
          type: 'GOOD' | 'BAD'
        }
    }
  }
}