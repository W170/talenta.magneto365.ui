import React, { useEffect, useRef } from "react"
import { classNames } from "@shared/utils/common"
import { Check } from "@constants/icons.constants"
import { ComparativeCounter, IconItem } from "@components/UI/atoms"
import { IChatQuestionnaireShort } from "./ChatQuestionnaireOpen.interface"
import styles from './ChatQuestionnaireOpen.module.scss'


const cx = classNames.bind(styles)

export const ChatQuestionnaireOpen: React.FC<IChatQuestionnaireShort> = ({  className, classNames, renderRight, ...rest }) => {

    const count = rest.value?.toString().length ?? rest.defaultValue?.toString().length ?? 0

      const ref = useRef<HTMLTextAreaElement>(rest.ref as unknown as HTMLTextAreaElement);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const handler = () => {
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
        };
        handler();
    }, [rest.value]);

    return (
        <div className={cx('short', classNames?.container)}>
            <div className={cx('short__field', classNames?.field)}>
                <textarea className={cx('short__input', className)} rows={1} ref={ref} {...rest} />
                {
                    renderRight?.({ classNameBtnSend: cx('short__button'), icon: <IconItem className={cx('short__icon')} icon={Check} size={20} /> })
                }
            </div>
            <ComparativeCounter className={classNames?.counter} current={count} max={rest.maxLength} position="right" />
        </div>
    )
}