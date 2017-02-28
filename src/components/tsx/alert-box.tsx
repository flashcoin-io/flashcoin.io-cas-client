import {render, Component} from 'preact';
import {tsx} from "../../core/tsx";

export default class AlertBox extends Component<any, any> {
    render() {
        var alertType = this.props.alertType ? this.props.alertType : "alert-success";
        var clazz = "alert " + this.props.alertType + " text-left";
        return (
            <div class={clazz}>
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <p class="notify-successful">{this.props.message}</p>
            </div>
        )
    }
}