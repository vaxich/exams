import React from 'react';

// что нужно написать вместо XXX и YYY чтобы у компоненты OneWeekSevenQuestion
//отобразила информацию о даух кошельках (bitcoin и $).ответ дай через пробел
// wallets[0] wallets[1]


type UserWalletType = {
       title: string
       amount: number
    }
type UserWalletPropsType = {
        wallet: UserWalletType
    }

export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
        return (
            <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
            )

    }

export const OneWeekSevenQuestion = () => {
        const wallets = [
                {title: 'bitcoin', amount: 1},
                {title: '$', amount: 100}
            ]

        return <div>
                <h2>вопрос 7</h2>
                <UserWallet wallet={wallets[0]} />
                <UserWallet wallet={wallets[1]} />
                <h4>ответ: wallets[0] wallets[1]</h4>
        </div>
    }
