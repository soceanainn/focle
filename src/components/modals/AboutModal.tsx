import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Faoi" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Seo leagan Gaeilge den cluiche Wordle, bunaithe ar {' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          an leagan foinse oscailte anseo
        </a>
        . Imir{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
           an bun-chluiche anseo
        </a>. Úsáidtear foinsí ó{' '}
        <a
            href="https://cadhan.com/lsg/"
            className="underline font-bold"
        >
            cadhan.com
        </a>
        {' '} chun an stór fhocail a ghinúint.
      </p>
    </BaseModal>
  )
}
