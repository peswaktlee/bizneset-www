import type { FC, ReactNode } from 'react'

import { useUserBusinesses } from '@/hooks'
import { List, Error, Loading, Empty } from '@/ui/components/user-businesses-list'
import { NormalLayout } from '@/ui/layouts'
import { Header } from '@/ui/views'
import { Translation } from '@/helpers/generals'
import { PageHeader } from '@/ui/components/generals'
import { SEO } from '@/ui/tools'

const UserBusinesses: FC = (): ReactNode => {
    const { InfiniteEndReference } = useUserBusinesses()

    return (
        <NormalLayout>
            <SEO title={Translation('account')} index={false} />
            <Header />
            <PageHeader title='user-businesses-title' description='user-businesses-description' />

            <div className='max-w-6xl relative mx-auto h-auto pb-8'>
                <List />
                <Error />
                <Loading />
                <Empty />

                <div className='w-full h-[1px] mt-[1px] mb-8' ref={InfiniteEndReference} />
            </div>
        </NormalLayout>
    )
}

export default UserBusinesses