import { ChatQuestionnaire as RawChatQuestionnaire } from './ChatQuestionnaire.component'
import { ChatQuestionnaireMessageCandidate } from './children/ChatQuestionnaireMessageCandidate'
import { ChatQuestionnaireMultipleChoice } from './children/ChatQuestionnaireMultipleChoice'
import { ChatQuestionnaireOpen } from './children/ChatQuestionnaireOpen/ChatQuestionnaireOpen.component'
import { ChatQuestionnaireQuestion } from './children/ChatQuestionnaireQuestion'
import { ChatQuestionnaireUniqueChoice } from './children/ChatQuestionnaireUniqueChoice'
import { useChatQuestionnaire } from './hooks/useChatQuestionnaire'
export type {
  IChatQuestionnaire,
  IQuestionWithAnswer,
  TSendQuestion,
  TSendCloseQuestion,
  EQuestionType,
  IPossibleAnswer,
  IQuestion,
  IQuestionnaireAnswer,
  IQuestionnaireMessage,
  TSendOpenQuestion
} from './ChatQuestionnaire.interface'

export const ChatQuestionnaire = Object.assign(RawChatQuestionnaire, {
  Question: ChatQuestionnaireQuestion,
  MessageCandidate: ChatQuestionnaireMessageCandidate,
  Answer: {
    UniqueChoice: ChatQuestionnaireUniqueChoice,
    MultipleChoice: ChatQuestionnaireMultipleChoice,
    Open: ChatQuestionnaireOpen
  },
  useChat: useChatQuestionnaire
})
