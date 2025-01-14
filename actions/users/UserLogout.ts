import { ScrollTop } from '@/helpers/generals'

import { FirebaseAuth } from '@/helpers/services'
import { ResetStates } from '@/actions/generals'

const UserLogout = async () => {
    await FirebaseAuth.signOut()

    ScrollTop()
    ResetStates(true)
}

export default UserLogout