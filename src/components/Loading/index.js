import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import { StyleLoading } from './style';

export default function Loading() {
	return (
		<StyleLoading>
			<CircularProgress sx={{ width: "75px !important", height: "75px !important", color: '#f0a970' }} />
		</StyleLoading>
	)
}
