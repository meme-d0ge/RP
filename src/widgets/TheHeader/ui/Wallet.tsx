/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
import {CrossIcon} from "@/shared/components/CrossIcon.tsx";
import style from './Wallet.module.scss'
import {PlusIcon} from "@/shared/components/PlusIcon.tsx";
import {CoinIcon} from "@/shared/components/CoinIcon.tsx";

export const Wallet = () => {
    return (
        <div className={style['wallet-container']}>
            <div className={style['wallet']}>
                <div className={style['wallet-amount']}>
                    <CoinIcon className={style['wallet-amount-coin']}></CoinIcon>
                    <span className={style['wallet-amount-count']}>30000000000</span>
                </div>
                <button className={style['wallet-button']}>
                    <PlusIcon className={style['wallet-button-svg']}/>
                </button>
            </div>
            <button className={style['wallet-button-close']}>
                <CrossIcon className={style['wallet-button-close-svg']}/>
            </button>
        </div>
    );
};
