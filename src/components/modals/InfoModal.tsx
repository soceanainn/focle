import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Conas Imirt" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Aimsigh an focal i 6 tomhais. Tar éis gach tomhas, athraíonn dath na litreacha
          chun léiriú cé chomh cóngarach a bhí do thomhas leis an bhfocal.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500">
        Tá an litir 'F' sa focal agus san áit ceart.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="A" />
        <Cell value="S" status="present" />
        <Cell value="Ú" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500">
        Tá an litir 'S' sa focal ach san áit mícheart.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="O" />
        <Cell value="I" status="absent" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500">
        Níl an litir 'I' in aon áit sa focal.
      </p>
    </BaseModal>
  )
}
