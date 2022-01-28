import * as React from 'react'
import styled from 'styled-components'
import { Button } from '../components/button'

const {useState} =React

const Wrapper = styled.div `
  align-items: center;
  background-color: #0002;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`
const Modal = styled.div `
  background: #fff;
  padding: 1rem;
  width: 32rem;
`

const TitleInput = styled.input`
  width: 29rem;
  padding: 0.5rem;
`

const Control = styled.div `
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
`

interface Props {
  onDelete: (title: string) => void
  onCancel: () => void
}

export const DeleteModal: React.FC<Props> = props => {
  const {onCancel, onDelete} = props
  const[title, setTitle] = useState(new Date().toISOString())
  
  return (
    <Wrapper>
      <Modal>
        <p>履歴の内容を削除します。</p>
        <p>履歴内容のタイトルを確認して「削除」ボタンを押してください。</p>
        <Control>
          <Button onClick={onCancel} cancel>
            キャンセル
          </Button>
          <Button onClick={() => onDelete(title)} >
            保存
          </Button>
        </Control>
      </Modal>
    </Wrapper>
  )
}