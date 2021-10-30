import React from 'react'
import { Core } from 'core'
import * as Material from '@material-ui/core'
import { useActionStyles } from 'admin/categories/title/hooks/use-action-styles'

export const Action = () => {
  const classes = useActionStyles()

  return (<Material.Grid item xs={12} md={3}>
    <Material.Box px={1} display={'flex'} justifyContent={'flex-end'} width={1} className={classes.box}>
      <Core.LinkButtons.Primary to={`/admin/categories/new`}>Adauga categorie</Core.LinkButtons.Primary>
    </Material.Box>
  </Material.Grid>)
}

