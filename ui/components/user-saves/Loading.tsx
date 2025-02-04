import type { FC, ReactNode } from 'react'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { UserSavesState } from '@/data/states'
import { GenerateRandomNumberOfBlankArrays } from '@/helpers/generals'
import { LoadingSkeleton } from '@/ui/components/user-saves'

const Loading: FC = (): ReactNode => {
    const { 
        Loading: UserSavesLoading, 
        Error, 
        UserSaves 
    } = UserSavesState(
        useShallow(state => {
            return {
                Loading: state.Loading,
                Error: state.Error,
                UserSaves: state.UserSaves
            }
        })
    )

    if (UserSavesLoading && !Error && UserSaves?.length === 0) return (
        <div className='w-full h-auto grid grid-cols-4 gap-x-8 gap-y-8'>
            {GenerateRandomNumberOfBlankArrays(14, 14).map((num: number) => (
                <Fragment key={num}>
                    <LoadingSkeleton />
                </Fragment>
            ))}
        </div>
    )
}

export default Loading