import React,{Component} from 'react'
import PropTypes from 'prop-types'



class AddTodo extends Component{
    constructor(props,context){
        super(props,context)

        this.onSubmit=this.onSubmit.bind(this)
        this.refInput=this.refInput.bind(this)
    }

    onSubmit(e){
        e.preventDefault()

        const input =this.input
        if (!input.value.trim()) {
            return
        }
        this.props.onAdd(input.value)
        input.value=''
    }

    refInput(node){
        this.input=node
    }

    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}


export default AddTodo