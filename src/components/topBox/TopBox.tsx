import { topDealUsers } from './../../data.ts'
import './topBox.scss'

const TopBox = () => {
	return (
		<div className='topBox'>
			<h1>Top Deals</h1>
			<div className='list'>
				{topDealUsers.map(user => {
					return (
						<div className='listItem' key={user.id}>
							<div className='user'>
								<img src={user.img} alt='user-image' />
								<div className='userTexts'>
									<div className='userName'>{user.username}</div>
									<span className='email'>{user.email}</span>
								</div>
							</div>
							<span className='amount'>${user.amount}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default TopBox
